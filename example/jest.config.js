const path = require('path');

module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mocks__/jestSetupFile.js'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@storybook/.*)',
  ],
  moduleNameMapper: {
    // Regex that matches 'react-native-design' and any subpath
    '^react-native-design(.*)$': path.resolve(__dirname, '../src$1'),
  },
};
