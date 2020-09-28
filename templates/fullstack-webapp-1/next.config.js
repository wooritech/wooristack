/* eslint-disable no-param-reassign, @typescript-eslint/no-var-requires, consistent-return */
/**
 * Next.js 설정
 *
 * - https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const fs = require('fs');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const lessToJS = require('less-vars-to-js');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

const antdThemeLess = fs.readFileSync(
  path.resolve(__dirname, './src/styles/less/antd-theme.less'),
  'utf8'
);
const antdThemeSass = antdThemeLess.replace(/\$/gi, '@');
const themeVariables = lessToJS(antdThemeSass);

const nextConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
};

// TODO: withBundleAnalyzer 적용
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// withPlugins 사용법: https://github.com/cyrilwanner/next-compose-plugins
module.exports = withPlugins([withSass, withLess], nextConfig);
