import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from 'react-native-design';
import { Alert, StyleSheet, View } from 'react-native';

const meta = {
  component: Avatar,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    picture:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    onPress: () => Alert.alert('Pressed small Avatar'),
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    onPress: () => Alert.alert('Pressed medium Avatar'),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    onPress: () => Alert.alert('Pressed large Avatar'),
  },
};

export const XLarge: Story = {
  args: {
    size: 'x-large',
    onPress: () => Alert.alert('Pressed x-large Avatar'),
  },
};

export const XXLarge: Story = {
  args: {
    size: 'xx-large',
    onPress: () => Alert.alert('Pressed xx-large Avatar'),
  },
};

export const XXXLarge: Story = {
  args: {
    size: 'xxx-large',
    onPress: () => Alert.alert('Pressed xxx-large Avatar'),
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
