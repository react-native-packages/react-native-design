jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('@rnpack/utils', () =>
  require('@rnpack/utils/__mocks__/rnpack-utils-mock.js')
);
