import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { Banner } from 'react-native-design';

const meta = {
  component: Banner,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    variant: 'default',
    iconSize: 18,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'warn', 'error'],
    },
    iconSize: {
      control: { type: 'number' },
      range: true,
      max: 80,
      step: 1,
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Default banner',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    content: 'Information banner',
  },
};

export const Warn: Story = {
  args: {
    variant: 'warn',
    content: 'Warn banner',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    content: 'Error banner',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
