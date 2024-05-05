import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-design';

const meta = {
  component: IconButton,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    size: {
      range: true,
      min: 1,
      max: 180,
      step: 1,
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'adjust',
    color: '#0000FF',
    size: 48,
    onPress: () => {
      Alert.alert('Pressed Icon');
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
