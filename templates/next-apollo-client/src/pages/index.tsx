import PublicUser from 'components/PublicUser';

const IndexPage = () => {
  return (
    <>
      <div className="bg-light p-5 rounded">
        <h1>Real GraphQL Client Template</h1>
        <p className="lead">
          이 템플릿은 ApolloClient 를 이용한 GraphQL 클라이언트 웹앱 템플릿
          입니다.
        </p>
        <p>
          소스코드는 우리테크 <mark>webstack 저장소</mark>에 있습니다. <br />이
          템플릿은 RealDesk API에 로그인 하고 사용자 프로필을 가져오는 연습을
          수행합니다. <br />
          RealDesk에 사용자 계정이 없는 경우 새로운 계정을 등록 할 수 있습니다.
        </p>
        <div>
          <PublicUser />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
