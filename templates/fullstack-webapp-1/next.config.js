/**
 * Next.js 설정
 * 
 * - https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig);
};
