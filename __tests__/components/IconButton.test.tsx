import React from 'react';
import { render } from '@testing-library/react-native';

import { IconButton } from '../../src/components';

describe('IconButton component', () => {
  it('IconButton component rendered successfully', () => {
    render(
      <IconButton
        testID="iconButton"
        accessible={true}
        accessibilityLabel="iconButton"
      />
    );
  });
});
