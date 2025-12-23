jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('@rnpack/utils', () =>
  require('@rnpack/utils/__mocks__/rnpack-utils-mock.js')
);

jest.mock('react-native-autocomplete-dropdown', () => {
  const React = require('react');

  const Mock = React.forwardRef((_props, _ref) => null);

  return {
    __esModule: true,
    default: Mock,
    AutocompleteDropdown: Mock,
  };
});
