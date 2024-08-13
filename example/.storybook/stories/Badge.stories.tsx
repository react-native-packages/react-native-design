import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge, FontAwesome, useAppTheme } from 'react-native-design';

const meta = {
  component: Badge,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    isIndication: { control: { type: 'boolean' } },
    count: { control: { type: 'number' } },
    countColor: { control: { type: 'color' } },
    countBackgroundColor: { control: { type: 'color' } },
    indicatorColor: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Indication: Story = {
  args: {
    isIndication: true,
    children: <StoryChild />,
  },
};

export const Count: Story = {
  args: {
    count: 21,
    children: <StoryChild />,
  },
};

function StoryChild() {
  const { colors } = useAppTheme();

  return (
    <FontAwesome
      name="bell-o"
      size={responsive?.size(24)}
      color={colors?.onBackground}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
