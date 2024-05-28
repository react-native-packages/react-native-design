import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';

import { DividerWithText } from 'react-native-design';

const meta = {
  component: DividerWithText,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {},
  argTypes: {
    // color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof DividerWithText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: 'OR',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
