import React from 'react';
import { Layout } from 'antd';
import { css } from '@emotion/core';
import Head from '@components/Head';
import { BaseLayoutProps } from './types';

const { Content } = Layout;

const contentStyle = css``;

export interface AuthLayoutProps extends BaseLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { title, description, children } = props;

  return (
    <Layout>
      <Head title={title} description={description} />

      <Content css={contentStyle}>{children}</Content>
    </Layout>
  );
};

export default AuthLayout;
