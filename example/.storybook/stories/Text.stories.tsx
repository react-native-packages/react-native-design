import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-design';

const meta = {
  component: Text,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    numberOfLines: 1,
  },
  argTypes: {
    variant: {
      options: ['text', 'button', 'error', 'label', 'title'],
      control: { type: 'select' },
    },
    numberOfLines: {
      range: true,
      min: 1,
      max: 10,
      step: 1,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: 'Text',
    variant: 'text',
  },
};

export const Button: Story = {
  args: {
    children: 'Button Text',
    variant: 'button',
  },
};

export const Error: Story = {
  args: {
    children: 'Error Text',
    variant: 'error',
  },
};

export const Label: Story = {
  args: {
    children: 'Label Text',
    variant: 'label',
  },
};

export const Title: Story = {
  args: {
    children: 'Title Text',
    variant: 'title',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
