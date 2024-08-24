import React from 'react';
import { render } from '@testing-library/react-native';

import { View } from '../../src/components';

describe('View component', () => {
  it('View component rendered successfully', () => {
    render(<View testID="View" accessible={true} accessibilityLabel="View" />);
  });
});
