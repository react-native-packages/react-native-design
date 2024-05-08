import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';

import { FontAwesome } from 'react-native-design';

import { appColors } from '../../../../src/themes/appColors';

const meta = {
  component: FontAwesome,
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
    name: { control: { type: 'text' } },
    size: {
      control: { type: 'number' },
      range: true,
      max: 180,
      step: 2,
    },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof FontAwesome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BullsEye: Story = {
  args: {
    name: 'bullseye',
    color: appColors?.primary,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
