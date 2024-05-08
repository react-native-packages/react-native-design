import React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from './../../src/components';

describe('Button component', () => {
  it('Button component rendered successfully', () => {
    render(
      <Button
        testID="button"
        accessible={true}
        accessibilityLabel="button"
        variant="contained"
        title="Press Me!"
      />
    );
  });
});
