import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { Meta, StoryObj } from '@storybook/react';

import { ShadowEffect, Text, useAppTheme } from 'react-native-design';
import type { MakeStyles } from 'react-native-design';

const meta = {
  component: ShadowEffect,
  decorators: [
    (Story) => {
      const { colors } = useAppTheme();

      const styles = makeStyles({ colors });

      return (
        <View style={styles?.container}>
          <Story />
        </View>
      );
    },
  ],
  argTypes: {
    shadowColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    radius: { control: 'number' },
    isShadowVisible: { control: 'boolean' },
  },
} satisfies Meta<typeof ShadowEffect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Shadow: Story = {
  args: {
    isShadowVisible: true,
  },
  render: (args) => {
    const { colors } = useAppTheme();

    const styles = makeStyles({ colors });

    return (
      <ShadowEffect {...args}>
        <View style={styles?.content}>
          <Text style={styles?.title}>Shadow Effect</Text>
        </View>
      </ShadowEffect>
    );
  },
};

export const NoShadow: Story = {
  args: {
    isShadowVisible: false,
  },
  render: (args) => {
    const { colors } = useAppTheme();

    const styles = makeStyles({ colors });

    return (
      <ShadowEffect {...args} shadowColor={colors?.onBackground}>
        <View style={styles?.content}>
          <Text style={styles?.title}>Shadow Effect</Text>
        </View>
      </ShadowEffect>
    );
  },
};

function makeStyles({ colors }: MakeStyles) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors?.background,
      flex: 1,
      justifyContent: 'center',
    },
    content: {
      backgroundColor: colors?.primary,
      paddingHorizontal: responsive?.size(10),
      paddingVertical: responsive?.height(10),
    },
    title: {
      color: colors?.onPrimary,
    },
  });

  return styles;
}
