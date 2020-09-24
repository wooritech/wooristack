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

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/themes/antd-custom.less'),
    'utf8'
  )
);

const withLess = require('@zeit/next-less')({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
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
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  // withPlugins 사용법: https://github.com/cyrilwanner/next-compose-plugins
  [withBundleAnalyzer({})],
  withLess,
]);
