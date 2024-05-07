import React from 'react';
import { render } from '@testing-library/react-native';

import { Card } from '../../src/components';

describe('Card component', () => {
  it('Card component rendered successfully', () => {
    render(<Card testID="card" accessible={true} accessibilityLabel="card" />);
  });
});
