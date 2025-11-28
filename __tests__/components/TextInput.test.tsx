import { render, screen } from '@testing-library/react-native';

import { TextInput } from '../../src/components';

describe('TextInput component', () => {
  beforeEach(() => {
    render(
      <TextInput
        name="name"
        placeholder="Enter your name"
        label="Name"
        testID="textInputName"
        accessible={true}
        accessibilityLabel="textInputName"
      />
    );
  });

  it('TextInput component rendered successfully', () => {
    const placeholder = screen?.getByPlaceholderText('Enter your name');
    expect(placeholder).toBeTruthy();

    const label = screen?.getByText('Name');
    expect(label).toBeTruthy();
  });

  it('TextInput component props', () => {
    const textInput = screen.getByTestId('textInputName.input');
    expect(textInput?.props?.placeholder).toBe('Enter your name');
    expect(textInput?.props?.value).toBeUndefined();
  });
});
