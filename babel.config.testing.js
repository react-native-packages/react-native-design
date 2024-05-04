// eslint-disable-next-line @typescript-eslint/no-var-requires
const appBabelConfig = require('./babel.config');

module.exports = {
  ...appBabelConfig,
  plugins: [
    ...appBabelConfig.plugins,
    ['@babel/plugin-transform-private-methods', { loose: true }],
  ],
};
