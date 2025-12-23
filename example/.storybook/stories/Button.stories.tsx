import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { Key } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'react-native-design';
import type { ButtonProps, ButtonVariant } from 'react-native-design';

const buttonVariants: Array<ButtonVariant> = ['contained', 'outlined', 'text'];

const buttons: Array<ButtonProps & { key: Key }> = [
  {
    key: 1,
    variant: 'contained',
    theme: 'primary',
    shape: 'rect',
    loadingPosition: undefined,
    isLoading: false,
    disabled: false,
    leftIconName: undefined,
    rightIconName: undefined,
  },
  {
    key: 2,
    variant: 'contained',
    theme: 'primary',
    shape: 'rect-sharp',
    loadingPosition: undefined,
    isLoading: false,
    disabled: true,
    leftIconName: undefined,
    rightIconName: undefined,
  },
  {
    key: 3,
    variant: 'contained',
    theme: 'primary',
    shape: 'round',
    loadingPosition: undefined,
    isLoading: false,
    disabled: false,
    leftIconName: undefined,
    rightIconName: undefined,
  },
  {
    key: 4,
    variant: 'contained',
    theme: 'primary',
    shape: 'rect',
    loadingPosition: undefined,
    isLoading: false,
    disabled: false,
    leftIconName: 'bullseye',
    rightIconName: undefined,
  },
  {
    key: 5,
    variant: 'contained',
    theme: 'primary',
    shape: 'rect-sharp',
    loadingPosition: undefined,
    isLoading: false,
    disabled: false,
    leftIconName: undefined,
    rightIconName: 'bullseye',
  },
  {
    key: 6,
    variant: 'contained',
    theme: 'primary',
    shape: 'round',
    loadingPosition: undefined,
    isLoading: false,
    disabled: false,
    leftIconName: 'bullseye',
    rightIconName: 'bullseye',
  },
  {
    key: 7,
    variant: 'contained',
    theme: 'primary',
    shape: 'rect',
    loadingPosition: 'left',
    isLoading: true,
    loaderSize: 'large',
    disabled: true,
    leftIconName: undefined,
    rightIconName: undefined,
  },
  {
    key: 8,
    variant: 'contained',
    theme: 'primary',
    shape: 'rect-sharp',
    loadingPosition: 'right',
    isLoading: true,
    disabled: false,
    leftIconName: undefined,
    rightIconName: undefined,
  },
  {
    key: 9,
    variant: 'contained',
    theme: 'primary',
    shape: 'round',
    loadingPosition: 'left',
    isLoading: true,
    disabled: true,
    leftIconName: undefined,
    rightIconName: 'bullseye',
  },
  {
    key: 10,
    variant: 'contained',
    theme: 'primary',
    shape: 'rect',
    loadingPosition: 'right',
    isLoading: true,
    loaderSize: 'large',
    disabled: false,
    leftIconName: 'bullseye',
    rightIconName: undefined,
  },
];

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
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'error',
        'info',
        'warn',
        'primaryContainer',
        'secondaryContainer',
        'tertiaryContainer',
        'errorContainer',
        'successContainer',
        'warnContainer',
        'infoContainer',
        'background',
        'surface',
        'surfaceVariant',
        'surfaceDisabled',
      ],
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

export const All: Story = {
  parameters: {
    controls: { include: ['theme'] },
  },
  render: (props: ButtonProps) => {
    return ButtonList(props);
  },
};

function ButtonList(props: ButtonProps) {
  const data: Array<ButtonProps> = [];

  buttonVariants?.forEach((variant) => {
    const tempButtons: Array<ButtonProps & { key: Key }> = [];

    buttons?.forEach((button) => {
      tempButtons?.push({
        ...button,
        variant,
        theme: props?.theme,
        key: `${button?.theme}${variant}${button?.key}`,
      });
    });

    data.push(...tempButtons);
  });

  return (
    <View style={styles?.content}>
      <FlatList
        data={data}
        renderItem={({ item: button }) => (
          <Button
            title="Button"
            fontSize={responsive?.size(21)}
            {...props}
            {...button}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles?.buttonListContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: responsive?.size(15),
  },
  buttonListContentContainer: {
    rowGap: responsive?.height(20),
    paddingBottom: responsive?.height(50),
    paddingTop: responsive?.height(20),
  },
});
