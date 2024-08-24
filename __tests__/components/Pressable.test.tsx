import React from 'react';
import { render } from '@testing-library/react-native';

import { Pressable } from '../../src/components';

describe('Pressable component', () => {
  it('Pressable component rendered successfully', () => {
    render(
      <Pressable
        testID="Pressable"
        accessible={true}
        accessibilityLabel="Pressable"
      />
    );
  });
});
