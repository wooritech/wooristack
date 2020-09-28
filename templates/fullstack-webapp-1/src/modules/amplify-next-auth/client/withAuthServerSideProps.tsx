import { GetServerSideProps } from 'next';
import { Auth, withSSRContext } from 'aws-amplify';

type AmplifyAuth = typeof Auth;

function withAuthServerSideProps(
  getServerSidePropsFunc?: GetServerSideProps
): GetServerSideProps {
  return async (context) => {
    try {
      const auth: AmplifyAuth = withSSRContext(context).Auth;
      await auth.currentAuthenticatedUser(); // 미인증일 경우 예외 발생
    } catch (e) {
      if (!context.res.headersSent) {
        context.res.writeHead(302, { Location: '/signin' });
        context.res.end();
      }
    }

    if (getServerSidePropsFunc) {
      return getServerSidePropsFunc(context);
    }
    return { props: {} };
  };
}

export default withAuthServerSideProps;
