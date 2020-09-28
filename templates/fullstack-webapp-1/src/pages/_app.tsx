import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/client';
import '../styles/scss/global.scss';

const AppWrapper: React.FC<{ pageProps: AppProps['pageProps'] }> = (props) => {
  const { pageProps, children } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <NextNprogress />
      <ConfigProvider locale={koKR}>{children}</ConfigProvider>
    </ApolloProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppWrapper pageProps={pageProps}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
