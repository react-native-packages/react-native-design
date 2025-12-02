module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mocks__/jestSetupFile.js'],
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/example/__mocks__',
    '<rootDir>/example/__tests__',
    '<rootDir>/lib/',
  ],
  transformIgnorePatterns: [],
  transform: {
    '\\.js$': ['babel-jest', { configFile: './babel.config.testing.js' }],
  },
};
