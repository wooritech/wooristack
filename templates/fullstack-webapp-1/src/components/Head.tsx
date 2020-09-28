import React from 'react';
import NextHead from 'next/head';

export interface HeadProps {
  title?: string;
  description?: string;
}

/**
 * 헤더 컴포넌트
 *
 * 1. 페이지별 상이한 헤더 설정
 *   - 전체 페이지의 공통 헤더 설정은 pages/_document.tsx에 구성
 */
const Head: React.FC<HeadProps> = (props) => {
  const { title: titleProps, description, children } = props;

  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const title = titleProps ? `${titleProps} | ${appName}` : appName;

  return (
    <>
      <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />
      </NextHead>
      {children}
    </>
  );
};

export default Head;
