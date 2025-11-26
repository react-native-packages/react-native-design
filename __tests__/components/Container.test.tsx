import { render } from '@testing-library/react-native';

import { Container } from '../../src/components';

describe('Container component', () => {
  it('Container component rendered successfully', () => {
    render(
      <Container
        testID="Container"
        accessible={true}
        accessibilityLabel="Container"
      />
    );
  });
});
