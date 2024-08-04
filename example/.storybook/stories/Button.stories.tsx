import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-design';

const meta = {
  component: Button,
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
  args: {
    variant: 'contained',
    leftIconSize: 26,
    rightIconSize: 26,
    isLoading: false,
    loadingPosition: 'left',
    theme: 'primary',
    shape: 'rect',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    shape: {
      control: { type: 'select' },
      options: ['rect', 'rect-sharp', 'round'],
    },
    disabled: { control: { type: 'boolean' } },
    leftIconName: { control: { type: 'text' } },
    leftIconColor: { control: { type: 'color' } },
    leftIconSize: {
      control: { type: 'number' },
      range: true,
      max: 80,
      step: 2,
    },
    rightIconName: { control: { type: 'text' } },
    rightIconColor: { control: { type: 'color' } },
    rightIconSize: {
      control: { type: 'number' },
      range: true,
      max: 80,
      step: 2,
    },
    isLoading: { control: { type: 'boolean' } },
    loadingPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    title: 'Press Me!',
    onPress: () => {
      Alert.alert('Pressed Button!');
    },
    leftIconName: 'bullseye',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Press Me!',
    variant: 'outlined',
    onPress: () => {
      Alert.alert('Pressed Button!');
    },
    leftIconName: 'bullseye',
  },
};

export const Text: Story = {
  args: {
    title: 'Press Me!',
    variant: 'text',
    onPress: () => {
      Alert.alert('Pressed Button!');
    },
    leftIconName: 'bullseye',
  },
};

export const Disabled: Story = {
  args: {
    title: "Can't Press, I am disabled",
    disabled: true,
    onPress: () => {
      Alert.alert("Can't Press, I am disabled");
    },
    leftIconName: 'bullseye',
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading...',
    isLoading: true,
    leftIconName: 'bullseye',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
