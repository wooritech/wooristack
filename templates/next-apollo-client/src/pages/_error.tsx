import { NextPageContext } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

type ErrorPageProps = {
  errorCode: number;
};

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  /** error for the next-auth */
  const router = useRouter();
  const queryError = () => {
    const query = router.query['error'];
    if (typeof query === 'string') {
      return query;
    }
    return 'unknown error';
  };

  if (queryError) return <Error statusCode={-100} title={queryError()} />;

  const { errorCode } = props;
  return <Error statusCode={errorCode}></Error>;
};

export async function getInitialProps(ctx: NextPageContext) {
  const { res, err } = ctx;
  const errorCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { errorCode };
}

export default ErrorPage;
