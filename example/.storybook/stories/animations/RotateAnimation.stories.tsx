import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { Meta, StoryObj } from '@storybook/react';

import {
  RotateAnimation,
  ShadowEffect,
  Text,
  useAppTheme,
} from 'react-native-design';
import type { MakeStyles } from 'react-native-design';

const meta = {
  component: RotateAnimation,
  decorators: [(Story) => <Story />],
  args: {
    orientation: 'horizontal',
    rotation: 'clockwise',
    loop: false,
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    rotation: {
      control: { type: 'select' },
      options: ['clockwise', 'anti-clockwise'],
    },
    duration: { control: { type: 'number' } },
    loop: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof RotateAnimation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClockwiseRotation: Story = {
  args: {
    rotation: 'clockwise',
    outputRange: ['0deg', '360deg'],
    duration: 3000,
    loop: false,
  },
  render: (args) => {
    return <StoryChild args={args} title="Clockwise Rotation" />;
  },
};

export const AntiClockwiseRotation: Story = {
  args: {
    rotation: 'anti-clockwise',
    outputRange: ['360deg', '0deg'],
    duration: 3000,
    loop: false,
  },
  render: (args) => {
    return <StoryChild args={args} title="Anti Clockwise Rotation" />;
  },
};

export const ContinuesRotation: Story = {
  args: {
    rotation: 'clockwise',
    outputRange: ['0deg', '360deg'],
    duration: 3000,
    loop: true,
  },
  render: (args) => {
    return <StoryChild args={args} title="Continues Rotation" />;
  },
};

interface StoryChildProps {
  args: { [key: string]: any };
  title: string;
}

function StoryChild(props: StoryChildProps) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <View style={styles?.container}>
      <RotateAnimation {...props?.args}>
        <ShadowEffect>
          <View style={styles?.content}>
            <Text style={styles?.title}>{props?.title}</Text>
          </View>
        </ShadowEffect>
      </RotateAnimation>
    </View>
  );
}

function makeStyles({ colors }: MakeStyles) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      backgroundColor: colors?.primaryContainer,
      padding: responsive?.size(20),
    },
    title: {
      color: colors?.onPrimaryContainer,
    },
  });

  return styles;
}
