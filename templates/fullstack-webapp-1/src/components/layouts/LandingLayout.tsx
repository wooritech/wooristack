import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { css } from '@emotion/core';
import Head from '@components/Head';
import { BaseLayoutProps } from './types';

const { Header, Content, Footer } = Layout;

const headerStyle = css`
  position: fixed;
  z-index: 1;
  width: 100%;
`;
const contentStyle = css`
  margin-top: 64px;
  padding: 0 50px;
`;
const breadcrumbStyle = css`
  margin: 16px 0;
`;
const childrenStyle = css`
  min-height: 380px;
  padding: 24px;
`;
const footerStyle = css`
  text-align: center;
`;

export interface LandingLayoutProps extends BaseLayoutProps {}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { title, description, children } = props;

  return (
    <Layout>
      <Head title={title} description={description} />

      <Header css={headerStyle}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>

      <Content css={contentStyle}>
        <Breadcrumb css={breadcrumbStyle}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div css={childrenStyle}>{children}</div>
      </Content>

      <Footer css={footerStyle}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default LandingLayout;
