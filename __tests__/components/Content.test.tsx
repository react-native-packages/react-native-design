import { render } from '@testing-library/react-native';

import { Content } from '../../src/components';

describe('Content component', () => {
  it('Content component rendered successfully', () => {
    render(
      <Content
        testID="Content"
        accessible={true}
        accessibilityLabel="Content"
      />
    );
  });
});
