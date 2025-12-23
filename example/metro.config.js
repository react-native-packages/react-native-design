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

const config = withMetroConfig(getDefaultConfig(__dirname), {
  root,
  dirname: __dirname,
});

const finalConfig = mergeConfig(defaultConfig, config);

module.exports = withStorybook(finalConfig, {
  // Enable/disable Storybook functionality - defaults to true
  enabled: true,

  // Path to your Storybook configuration folder - defaults to './.rnstorybook'
  configPath: './.storybook',

  // Use JavaScript instead of TypeScript for generated files - defaults to false
  useJs: false,

  // Include doc tools for automatic args - defaults to true
  docTools: true,

  // Use lite mode (mocks out default Storybook UI dependencies) - defaults to false
  liteMode: false,

  // WebSocket server configuration - defaults to undefined
  websockets: {
    port: 7007,
    host: 'localhost',
  },
});
