import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../../src/components';

describe('Text component', () => {
  it('Text component rendered successfully', () => {
    render(
      <Text testID="text" accessible={true} accessibilityLabel="text">
        Text
      </Text>
    );

    const text = screen?.getByTestId('text');
    expect(text?.children[0]).toBe('Text');
  });
});
