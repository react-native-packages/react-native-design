import React from 'react';
import { render } from '@testing-library/react-native';

import { FontAwesome } from './../../../src/components';

describe('FontAwesome component', () => {
  it('FontAwesome component rendered successfully', () => {
    render(
      <FontAwesome
        testID="fontAwesome"
        accessible={true}
        accessibilityLabel="fontAwesome"
        name="bullseye"
      />
    );
  });
});
