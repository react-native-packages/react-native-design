import React from 'react';
import { StyleSheet } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { View, Text, useAppTheme } from 'react-native-design';
import type { ViewProps } from 'react-native-design';

const meta = {
  component: View,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props: ViewProps) => {
    const { colors } = useAppTheme();
    return (
      <View
        style={[
          styles?.container,
          { alignItems: 'center', backgroundColor: colors?.onBackground },
        ]}
      >
        <View {...props} style={styles?.content}>
          <Text>Press Me!</Text>
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
