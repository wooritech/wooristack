import { setCookie } from 'nookies';

import Repositories from 'components/Repositories';

const IndexPage = () => {
  /** 테스트를 위해 사용자 정보를 가져온것 처럼
   * 쿠키유틸을 이용해 github access token을 넣어 준다.
   * production에서는 로그인 같은 인증 처리가 필요하다. */
  setCookie(
    null,
    'token',
    process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN
  );

  return (
    <>
      <div className="bg-light p-5 rounded">
        <h1>Real GraphQL Client Template</h1>
        <p className="lead">
          이 템플릿은 ApolloClient 를 이용한 GraphQL 클라이언트 웹앱 템플릿
          입니다.
        </p>
        <p>
          소스코드는 깃허브 저장소에서 정보를 가져오는 예제로 <br />
          개발을 위해 루트 경로의 <code>.env</code> 파일에
          <br />
          NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN 값을 지정하면 됩니다.
          <br />
          <a href="https://github.com/settings/tokens">
            Personal access token{' '}
          </a>
          의 권한은 admin:org, notifications, repo, user 정도로 줍니다.
        </p>
        <div>
          <Repositories />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
