import React from 'react';
import { render } from '@testing-library/react-native';

import { FormField } from '../../src/components';

describe('FormField component', () => {
  it('FormField component rendered successfully', () => {
    render(
      <FormField
        testID="formField"
        accessible={true}
        accessibilityLabel="formField"
      />
    );
  });
});
