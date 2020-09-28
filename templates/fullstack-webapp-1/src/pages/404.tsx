import { NextPage } from 'next';
import Error from '@components/Error';

/**
 * 커스텀 404 페이지
 * - https://nextjs.org/docs/advanced-features/custom-error-page#404-page
 */
const Custom404Page: NextPage = () => {
  return <Error statusCode={404} title="페이지를 찾을 수 없습니다" />;
};

export default Custom404Page;
