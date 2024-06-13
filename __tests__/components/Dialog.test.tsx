import React from 'react';
import { render } from '@testing-library/react-native';

import { Dialog } from './../../src/components';

describe('Dialog component', () => {
  it('Dialog component rendered successfully', () => {
    render(
      <Dialog testID="dialog" accessible={true} accessibilityLabel="dialog" />
    );
  });
});
