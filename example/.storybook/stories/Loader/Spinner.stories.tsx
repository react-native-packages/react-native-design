import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'react-native-design';

const meta = {
  component: Spinner,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    isVisible: true,
    size: 'small',
  },
  argTypes: {
    isVisible: { control: { type: 'boolean' } },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
