import React from 'react';
import { render } from '@testing-library/react-native';

import { AutocompleteDropdown } from '../../src/components';
import type { AutocompleteDropdownProps } from './../../src/components';

const dataSet: Pick<AutocompleteDropdownProps, 'dataSet'>['dataSet'] = [
  { id: '1', title: 'Cupcake' },
  { id: '2', title: 'Donut' },
  { id: '3', title: 'Eclair' },
  { id: '4', title: 'Froyo' },
  { id: '5', title: 'Gingerbread' },
  { id: '6', title: 'Honeycomb' },
  { id: '7', title: 'Ice Cream Sandwich' },
];

describe('AutocompleteDropdown component', () => {
  it('AutocompleteDropdown component rendered successfully', () => {
    render(
      <AutocompleteDropdown
        testID="autocompleteDropdown"
        accessible={true}
        accessibilityLabel="autocompleteDropdown"
        dataSet={dataSet}
      />
    );
  });
});
