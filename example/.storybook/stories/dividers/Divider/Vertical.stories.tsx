import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';

import { Divider, appColors } from 'react-native-design';

const meta = {
  component: Divider,
  decorators: [
    (Story) => (
      <View style={[styles?.container]}>
        <Story />
      </View>
    ),
  ],
  args: {
    orientation: 'vertical',
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    color: appColors?.primary,
    orientation: 'vertical',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
