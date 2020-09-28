import React from 'react';
import NextError, { ErrorProps as NextErrorProps } from 'next/error';

interface ErrorProps extends NextErrorProps {
  statusCode: NextErrorProps['statusCode'];
  title?: NextErrorProps['title'];
}

/**
 * 에러 컴포넌트
 */
const Error: React.FC<ErrorProps> = (props) => {
  const { statusCode, title } = props;

  return <NextError statusCode={statusCode} title={title} />;
};

export default Error;
