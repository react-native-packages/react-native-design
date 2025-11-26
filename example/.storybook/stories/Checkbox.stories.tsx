import { responsive } from '@rnpack/utils';

import type { Meta, StoryObj } from '@storybook/react';

import { Container, Checkbox } from 'react-native-design';

const meta = {
  component: Checkbox,
  decorators: (Story) => (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsive?.size(20),
      }}
    >
      <Story />
    </Container>
  ),
  args: {},
  argTypes: {
    isChecked: { control: { type: 'boolean' } },
    isControlled: { control: { type: 'boolean' } },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom', 'inside'],
    },
    isDisabled: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    id: 'checkbox',
  },
};

export const Label: Story = {
  args: {
    id: 'checkbox',
    label: 'Opt-In',
  },
};

export const LongLabel: Story = {
  args: {
    id: 'optInCheckbox',
    label: 'Opt-In for the feature',
  },
};
