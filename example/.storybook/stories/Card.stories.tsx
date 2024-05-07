import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-design';

const meta = {
  component: Card,
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
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: <Text>Press Me!</Text>,
    onPress: () => {
      Alert.alert('Pressed Card');
    },
  },
};

export const Disabled: Story = {
  args: {
    children: <Text>Can't Press, I am disabled</Text>,
    disabled: true,
    onPress: () => {
      Alert.alert("Can't Press, I am disabled");
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
