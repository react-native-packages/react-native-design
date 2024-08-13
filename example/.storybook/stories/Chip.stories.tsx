import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from 'react-native-design';

const meta = {
  component: Chip,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    theme: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warn', 'error'],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Default' },
  render: () => {
    return (
      <View style={styles?.container}>
        <Chip title="Default" theme="default" />
        <Chip title="Default" theme="default" variant="outlined" />
        <Chip title="Default" theme="default" variant="text" />
        <Chip title="Info" theme="info" leftIconName="information-outline" />
        <Chip
          title="Info"
          theme="info"
          leftIconName="information-outline"
          variant="outlined"
        />
        <Chip
          title="Info"
          theme="info"
          leftIconName="information-outline"
          variant="text"
        />
        <Chip
          title="Success"
          theme="success"
          leftIconName="check-circle-outline"
        />
        <Chip
          title="Success"
          theme="success"
          leftIconName="check-circle-outline"
          variant="outlined"
        />
        <Chip
          title="Success"
          theme="success"
          leftIconName="check-circle-outline"
          variant="text"
        />
        <Chip title="Warn" theme="warn" leftIconName="alert-circle-outline" />
        <Chip
          title="Warn"
          theme="warn"
          leftIconName="alert-circle-outline"
          variant="outlined"
        />
        <Chip
          title="Warn"
          theme="warn"
          leftIconName="alert-circle-outline"
          variant="text"
        />
        <Chip
          title="Error"
          theme="error"
          leftIconName="alert-rhombus-outline"
        />
        <Chip
          title="Error"
          theme="error"
          leftIconName="alert-rhombus-outline"
          variant="outlined"
        />
        <Chip
          title="Error"
          theme="error"
          leftIconName="alert-rhombus-outline"
          variant="text"
        />
        <Chip title="Left Icon" leftIconName="arrow-left" />
        <Chip title="Right Icon" rightIconName="arrow-right" />
        <Chip
          title="Left Right Icon"
          leftIconName="check-decagram-outline"
          rightIconName="cake-variant-outline"
          theme="success"
        />
        <Chip
          title="Left Right Icon"
          theme="success"
          variant="outlined"
          leftIconName="check-decagram-outline"
          rightIconName="cake-variant-outline"
        />
        <Chip
          title="Left Right Icon"
          theme="success"
          variant="text"
          leftIconName="check-decagram-outline"
          rightIconName="cake-variant-outline"
        />
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsive?.size(15),
    padding: responsive?.size(10),
  },
});
