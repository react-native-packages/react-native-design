// START: Default Metro Config

// const path = require('path');
// const { getDefaultConfig } = require('@react-native/metro-config');
// const { withMetroConfig } = require('react-native-monorepo-config');

// const root = path.resolve(__dirname, '..');

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// module.exports = withMetroConfig(getDefaultConfig(__dirname), {
//   root,
//   dirname: __dirname,
// });

// END: Default Metro Config

const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withMetroConfig } = require('react-native-monorepo-config');
const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');

const root = path.resolve(__dirname, '..');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const metroConfig = withMetroConfig(getDefaultConfig(__dirname), {
  root,
  dirname: __dirname,
});

const finalConfig = mergeConfig(defaultConfig, metroConfig);

module.exports = withStorybook(
  finalConfig,
  {
    configPath: './.storybook',
  },
  {
    root,
    dirname: __dirname,
  }
);
