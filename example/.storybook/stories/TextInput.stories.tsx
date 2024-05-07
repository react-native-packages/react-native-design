import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { TextInput, responsive } from 'react-native-design';

const meta = {
  component: TextInput,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    editable: true,
    numberOfLines: 1,
    maxLength: 10,
    secureTextEntry: false,
    showPasswordVisibility: false,
    keyboardType: 'default',
  },
  argTypes: {
    editable: {
      control: 'boolean',
    },
    multiline: {
      control: 'boolean',
    },
    numberOfLines: {
      control: { type: 'number' },
      range: true,
      min: 1,
      max: 10,
      step: 1,
    },
    maxLength: {
      control: { type: 'number' },
      range: true,
      min: 0,
      max: 120,
      step: 5,
    },
    secureTextEntry: { control: 'boolean' },
    showPasswordVisibility: { control: 'boolean' },
    keyboardType: {
      control: { type: 'select' },
      options: [
        'default',
        'number-pad',
        'decimal-pad',
        'numeric',
        'email-address',
        'phone-pad',
        'url',

        'visible-password',

        'ascii-capable',
        'numbers-and-punctuation',
        'name-phone-pad',
        'twitter',
        'web-search',
      ],
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'name',
    placeholder: 'Enter your name',
    label: 'Name',
    leftIconName: 'user',
  },
};

export const Password: Story = {
  args: {
    name: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    leftIconName: 'key',
    showPasswordVisibility: true,
  },
};

export const Error: Story = {
  args: {
    name: 'email',
    placeholder: 'Enter your email',
    label: 'Email',
    leftIconName: 'envelope',
    error: 'Please enter valid email',
    touched: true,
    showPasswordVisibility: true,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: responsive.size(20),
  },
});
