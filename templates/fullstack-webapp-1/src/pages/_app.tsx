import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';

const AppWrapper: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <NextNprogress />
      <ConfigProvider locale={koKR}>{children}</ConfigProvider>
    </>
  );
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppWrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
