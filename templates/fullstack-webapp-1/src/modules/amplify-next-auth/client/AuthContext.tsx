import { createContext, useState, useEffect } from 'react';
import { Auth, withSSRContext } from 'aws-amplify';
// FIXME: '@aws-amplify/auth 패키지를 직접 설치할 경우 번들 사이즈가 너무 커짐
// eslint-disable-next-line import/no-extraneous-dependencies
import { CognitoUser } from '@aws-amplify/auth';

import { LoggerFactory } from '../../logger';

const logger = LoggerFactory.getLogger('amplify-auth-next');

type AmplifyAuth = typeof Auth;

interface UnconfirmedUser {
  username: string;
  destination?: string;
}

// ISSUE: Amplify Authentication에서 사용되는 CognitoUser 타입에는 attributes 속성이 생략되어 있다. (문서 불일치)
type AmplifyUser = CognitoUser & { attributes: any };

/**
 * Context
 */
export interface AuthContextProps {
  loading: boolean;
  isAuthenticated: boolean;
  user: AmplifyUser;
  unconfirmedUser: UnconfirmedUser;
  setUnconfirmedUser: (user: UnconfirmedUser) => void;
  signUp: AmplifyAuth['signUp'];
  confirmSignUp: AmplifyAuth['confirmSignUp'];
  resendSignUp: AmplifyAuth['resendSignUp'];
  signIn: AmplifyAuth['signIn'];
  signOut: AmplifyAuth['signOut'];
  changePassword: AmplifyAuth['changePassword'];
  updateUserAttributes: AmplifyAuth['updateUserAttributes'];
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

if (process.env.NODE_ENV !== 'production') {
  AuthContext.displayName = 'AuthContext';
}

/**
 * Provider
 */
export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<AmplifyUser>(null);
  const [unconfirmedUser, setUnconfirmedUser] = useState<UnconfirmedUser>(null);

  const SsrAuth: AmplifyAuth = withSSRContext().Auth;

  type CurrentUserOpts = Parameters<
    typeof SsrAuth['currentAuthenticatedUser']
  >[0];

  const refereshAuth = async (options?: CurrentUserOpts) => {
    try {
      logger.debug('로컬 인증 상태 동기화를 시작합니다.');
      const currentUser = await SsrAuth.currentAuthenticatedUser(options);
      setUser(currentUser);
    } catch (e) {
      setUser(null);
    } finally {
      setLoading(false);
      logger.debug('로컬 인증 상태 동기화를 완료합니다.');
    }
  };

  // 현재 인증상태 동기화
  useEffect(() => {
    refereshAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 회원가입
  const signUp: AmplifyAuth['signUp'] = async (...params) => {
    const result = await SsrAuth.signUp(...params);

    setUnconfirmedUser({
      username: result?.user?.getUsername(),
      destination: result?.codeDeliveryDetails?.Destination,
    });

    return result;
  };

  // 회원가입 인증
  const confirmSignUp: AmplifyAuth['confirmSignUp'] = async (...params) => {
    const result = await SsrAuth.confirmSignUp(...params);

    setUnconfirmedUser(null);

    return result;
  };

  // 회원가입 인증코드 보내기
  const resendSignUp: AmplifyAuth['resendSignUp'] = SsrAuth.resendSignUp.bind(
    SsrAuth
  );

  // 로그인
  const signIn: AmplifyAuth['signIn'] = async (...params) => {
    const signedInUser = await SsrAuth.signIn(...params);

    setUser(signedInUser);

    return signedInUser;
  };

  // 로그아웃
  const signOut: AmplifyAuth['signOut'] = async (...params) => {
    const result = SsrAuth.signOut(...params);

    setUser(null);

    return result;
  };

  // 비밀번호 변경
  const changePassword: AmplifyAuth['changePassword'] = async (...params) => {
    const result = SsrAuth.changePassword(...params);
    return result;
  };

  // 유저 속성 변경
  const updateUserAttributes: AmplifyAuth['updateUserAttributes'] = async (
    ...params
  ) => {
    const result = SsrAuth.updateUserAttributes(...params);

    // FIXME: bypassCache 옵션은 캐시가 아닌 서버의 최신 정보를 가져고 와야하는데 작동하지 않음
    await refereshAuth({ bypassCache: true });

    return result;
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuthenticated: !!user,
        user,
        unconfirmedUser,
        setUnconfirmedUser,
        signUp,
        confirmSignUp,
        resendSignUp,
        signIn,
        signOut,
        changePassword,
        updateUserAttributes,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
