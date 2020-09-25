/* eslint-disable global-require, @typescript-eslint/no-var-requires */
/**
 * Nexus 서버
 * - playground: 브라우저에서 [서버URL]/api/graphql 접속
 * - nextjs 제약사항: https://nexusjs.org/guides/recipes#notes
 */
if (process.env.NODE_ENV === 'development') require('nexus').default.reset();

const server = require('../../graphql/server').default;

// 커스텀 설정
// - https://nextjs.org/docs/api-routes/api-middlewares#custom-config
export const config = {
  api: {
    bodyParser: false, // 파일 업로드 시 필요
    externalResolver: true, // nexus graphql 사용
  },
};

export default server;
