import React from 'react';
import { render } from '@testing-library/react-native';

import { Divider } from './../../../src/components';

describe('Divider component', () => {
  it('Divider component rendered successfully', () => {
    render(
      <Divider
        testID="divider"
        accessible={true}
        accessibilityLabel="divider"
      />
    );
  });
});
