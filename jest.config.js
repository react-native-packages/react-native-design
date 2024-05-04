module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mock__/jestSetupFile.js'],
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native-notifier)/',
    'node_modules/(?!react-native-base64)/',
  ],
  transform: {
    '\\.js$': ['babel-jest', { configFile: './babel.config.testing.js' }],
  },
};
