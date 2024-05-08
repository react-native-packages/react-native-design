import React from 'react';
import { render } from '@testing-library/react-native';

import { Spinner } from './../../../src/components';

describe('Spinner component', () => {
  it('Spinner component rendered successfully', () => {
    render(
      <Spinner
        testID="spinner"
        accessible={true}
        accessibilityLabel="spinner"
      />
    );
  });
});
