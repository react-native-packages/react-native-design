import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { Card, Pressable, Text, useAppTheme } from 'react-native-design';
import type { PressableProps } from 'react-native-design';

const meta = {
  component: Pressable,
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
    opacity: { control: { type: 'number' } },
    pressedOpacity: { control: { type: 'number' } },
    color: { control: { type: 'color' } },
    pressedColor: { control: { type: 'color' } },
    disabled: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Pressable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props: PressableProps) => {
    const { colors } = useAppTheme();

    function onPress() {
      Alert.alert('Pressed Me!!!');
    }

    return (
      <Pressable {...props} onPress={onPress}>
        <View style={[styles?.content, { borderColor: colors?.onBackground }]}>
          <Text>Press Me!</Text>
        </View>
      </Pressable>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
