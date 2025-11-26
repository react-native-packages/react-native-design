import React from 'react';
import { View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { DonutChart } from 'react-native-design';
import { responsive } from '@rnpack/utils';

const meta = {
  component: DonutChart,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof DonutChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    radius: 150,
    strokeWidth: 50,
    percentage: 100,
  },
};
