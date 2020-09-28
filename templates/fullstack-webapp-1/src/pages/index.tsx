import React from 'react';
import { NextPage } from 'next';
import { Button } from 'antd';
import DatePicker from '@components/base/DatePicker';

const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <DatePicker />
      <Button type="primary">Antd Button</Button>
    </>
  );
};

export default IndexPage;
