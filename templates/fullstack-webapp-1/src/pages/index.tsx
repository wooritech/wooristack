import React from 'react';
import { NextPage } from 'next';
import { Button } from 'antd';

const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>

      <Button type="primary">Antd Button</Button>
    </>
  );
};

export default IndexPage;
