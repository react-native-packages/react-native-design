import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, responsive } from 'react-native-design';

import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useAppTheme } from '../../../src/hooks';

const meta = {
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    containerStyle: {
      width: '100%',
    },
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: StoryObj<ComponentProps<typeof Button>> = {
  args: {},
  render: (args) => {
    const { mode, colors, changeAppTheme } = useAppTheme();

    function toggleTheme() {
      changeAppTheme(mode === 'dark' ? 'light' : 'dark');
    }

    return (
      <View
        style={{
          backgroundColor: colors?.primaryContainer,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Button
          {...args}
          title={`Toggle Theme: ${mode}`}
          onPress={toggleTheme}
        />
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsive.size(10),
  },
});
