import { responsive } from '@rnpack/utils';

import type { Meta, StoryObj } from '@storybook/react';

import { Container, Switch } from 'react-native-design';

const meta = {
  component: Switch,
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
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    isOn: { control: { type: 'boolean' } },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    isDisabled: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: 'Opt-In',
  },
};

export const LongLabel: Story = {
  args: {
    numberOfLines: 1,
    label: 'Opt-In for the feature of checking long label for multi line test',
  },
};
