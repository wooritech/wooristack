import React from 'react';
import { AppProps } from 'next/app';

import { withApollo } from '../lib/apollo';
import './main.scss';
import './styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withApollo()(App);
