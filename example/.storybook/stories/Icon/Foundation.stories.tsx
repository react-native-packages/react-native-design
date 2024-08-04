import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { Foundation, FoundationIconsName } from 'react-native-design';

const meta = {
  component: Foundation,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    size: 60,
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(FoundationIconsName),
    },
    size: {
      control: { type: 'number' },
      range: true,
      max: 180,
      step: 2,
    },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Foundation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'background-color',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
