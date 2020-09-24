/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Next.js 설정
 *
 * - https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  // withPlugins 사용법: https://github.com/cyrilwanner/next-compose-plugins
  [withBundleAnalyzer({})],
]);
