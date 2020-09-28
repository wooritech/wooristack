import { useContext } from 'react';

import AuthContext, { AuthContextProps } from './AuthContext';

export interface UseAuthReturn extends AuthContextProps {}

const useAuth = (): UseAuthReturn => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내부에서 사용되어야 합니다.');
  }

  return context;
};

export default useAuth;
