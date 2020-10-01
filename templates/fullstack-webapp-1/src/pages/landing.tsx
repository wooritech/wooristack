import { NextPage } from 'next';
import { css } from '@emotion/core';
import { Typography } from 'antd';
import LandingLayout from '@components/layouts/LandingLayout';

const { Title } = Typography;

const heroStyle = css`
  display: flex;
  align-items: center;
  height: 500px;
  background-color: white;
`;
const section1Style = css`
  height: 150px;
  background-color: lightblue;
`;
const section2Style = css`
  height: 150px;
  background-color: lightgoldenrodyellow;
`;
const titleStyle = css`
  margin-left: 150px;
`;

const LandingPage: NextPage = () => {
  return (
    <LandingLayout>
      <div css={heroStyle}>
        <Title css={titleStyle}>새로운 웹 프로젝트를 시작해보세요.</Title>
      </div>
      <div css={section1Style}>
        <h1>섹션 2</h1>
      </div>
      <div css={section2Style}>
        <h1>섹션 3</h1>
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
