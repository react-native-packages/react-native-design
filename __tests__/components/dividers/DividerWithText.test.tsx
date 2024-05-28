import React from 'react';
import { render } from '@testing-library/react-native';

import { DividerWithText } from './../../../src/components';

describe('DividerWithText component', () => {
  it('DividerWithText component rendered successfully', () => {
    render(
      <DividerWithText
        testID="dividerWithText"
        accessible={true}
        accessibilityLabel="dividerWithText"
        text="OR"
      />
    );
  });
});
