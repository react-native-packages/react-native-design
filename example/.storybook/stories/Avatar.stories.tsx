import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from 'react-native-design';
import { StyleSheet, View } from 'react-native';

const meta = {
  component: Avatar,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    picture:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    size: 'x-large',
  },
};

export const XXLarge: Story = {
  args: {
    size: 'xx-large',
  },
};

export const XXXLarge: Story = {
  args: {
    size: 'xxx-large',
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
