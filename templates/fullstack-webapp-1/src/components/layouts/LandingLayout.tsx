import React from 'react';
import { Layout, Menu, Row, Col, Button, Dropdown, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { css } from '@emotion/core';
import Head from '@components/Head';
import Link from '@components/base/Link';
import { BaseLayoutProps } from './types';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const headerStyle = css`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 8px #f0f1f2;
`;
const brandStyle = css`
  margin-bottom: 0 !important;
`;
const headerNavStyle = css`
  margin-right: 64px;
`;
const contentStyle = css`
  margin-top: 64px;
`;
const footerStyle = css`
  text-align: center;
`;

const navMenuItems = [
  <Menu.Item key="1">메뉴 1</Menu.Item>,
  <Menu.Item key="2">메뉴 2</Menu.Item>,
  <Menu.Item key="3">메뉴 3</Menu.Item>,
  <Menu.Item key="4">메뉴 4</Menu.Item>,
];

const HamburgerMenu: React.FC = () => {
  const menu = (
    <Menu>
      {navMenuItems}
      <Menu.Divider />
      {/* navMenuItems의 키와 안겹치도록 설정 */}
      <Menu.Item key="5">로그아웃</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button type="text" shape="circle" size="large">
        <MenuOutlined />
      </Button>
    </Dropdown>
  );
};

export interface LandingLayoutProps extends BaseLayoutProps {}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { title, description, children } = props;

  return (
    <Layout>
      <Head title={title} description={description} />

      <Header css={headerStyle}>
        <Row align="middle">
          <Col xs={12} sm={12} md={4}>
            {/* 브랜드 */}
            <Link href="/">
              <Title css={brandStyle} level={4}>
                {process.env.NEXT_PUBLIC_APP_NAME}
              </Title>
            </Link>
          </Col>

          <Col xs={0} sm={0} md={20}>
            <Row justify="end" align="middle">
              {/* 헤더 네비게이션 */}
              <Col>
                <Menu
                  css={headerNavStyle}
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                >
                  {navMenuItems}
                </Menu>
              </Col>

              {/* 헤더 액션 */}
              <Col>
                <Button>로그인</Button>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={0}>
            <Row justify="end">
              <HamburgerMenu />
            </Row>
          </Col>
        </Row>
      </Header>

      <Content css={contentStyle}>{children}</Content>

      <Footer css={footerStyle}>wooristack ©2020 Created by Wooritech</Footer>
    </Layout>
  );
};

export default LandingLayout;
