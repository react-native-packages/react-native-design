import React, { type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import { Alert, StyleSheet, View } from 'react-native';

import { Button, Dialog, Text, responsive } from 'react-native-design';

const meta = {
  component: Dialog,
  decorators: [
    (Story) => (
      <View style={styles?.container}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    title: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Confirmation: StoryObj<ComponentProps<typeof Dialog>> = {
  args: {
    title: 'Are you sure, do you wants to logout?',
    transparent: true,
    isCollapsable: false,
    acceptText: 'Yes',
    onPressAccept() {
      Alert.alert('Accepted!');
    },
    rejectText: 'No',
    onPressReject() {
      Alert.alert('Rejected!');
    },
    hideDialogTitleDivider: true,
    hideActionContainerDivider: true,
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function onDismiss() {
      setIsVisible(false);
    }

    function onPressOpen() {
      setIsVisible(true);
    }

    return (
      <>
        <Dialog
          {...args}
          isVisible={isVisible}
          onDismiss={onDismiss}
          onRequestClose={onDismiss}
        />
        <Button title="Open Modal" onPress={onPressOpen} />
      </>
    );
  },
};

export const ConfirmationWithDescription: StoryObj<
  ComponentProps<typeof Dialog>
> = {
  args: {
    title: 'Logout',
    transparent: true,
    isCollapsable: false,
    acceptText: 'Yes',
    onPressAccept() {
      Alert.alert('Accepted!');
    },
    rejectText: 'No',
    onPressReject() {
      Alert.alert('Rejected!');
    },
    hideDialogTitleDivider: true,
    hideActionContainerDivider: true,
    children: (
      <Text variant="text" style={{ fontSize: responsive.size(18) }}>
        Are you sure, do you wants to logout?
      </Text>
    ),
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function onDismiss() {
      setIsVisible(false);
    }

    function onPressOpen() {
      setIsVisible(true);
    }

    return (
      <>
        <Dialog
          {...args}
          isVisible={isVisible}
          onDismiss={onDismiss}
          onRequestClose={onDismiss}
        />
        <Button title="Open Modal" onPress={onPressOpen} />
      </>
    );
  },
};

export const Information: StoryObj<ComponentProps<typeof Dialog>> = {
  args: {
    title: 'Information',
    transparent: true,
    isCollapsable: false,
    hideDialogTitleDivider: true,
    hideActionContainerDivider: true,
    children: (
      <Text variant="text" style={{ fontSize: responsive.size(18) }}>
        You can't change visibility of close icon in modal
      </Text>
    ),
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function onDismiss() {
      setIsVisible(false);
    }

    function onPressOpen() {
      setIsVisible(true);
    }

    return (
      <>
        <Dialog
          {...args}
          isVisible={isVisible}
          onDismiss={onDismiss}
          onRequestClose={onDismiss}
        />
        <Button title="Open Modal" onPress={onPressOpen} />
      </>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
