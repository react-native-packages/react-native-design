import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { AntDesign, AntDesignIconsName } from 'react-native-design';

const meta = {
  component: AntDesign,
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
      options: Object.keys(AntDesignIconsName),
    },
    size: {
      control: { type: 'number' },
      range: true,
      max: 180,
      step: 2,
    },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof AntDesign>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'API',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
