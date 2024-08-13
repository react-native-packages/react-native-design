import React from 'react';
import { responsive } from '@rnpack/utils';
import { StyleSheet, View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { Feather, useAppTheme, WaveCircleAnimation } from 'react-native-design';
import type { MakeStyles } from 'react-native-design';

const meta = {
  component: WaveCircleAnimation,
  decorators: [(Story) => <Story />],
  args: {
    motion: 'outside',
  },
  argTypes: {
    motion: { control: { type: 'select' }, options: ['outside', 'inside'] },
    color: { control: { type: 'color' } },
    loop: { control: { type: 'boolean' } },
    repeatReverse: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof WaveCircleAnimation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outside: Story = {
  args: {
    motion: 'outside',
  },
  render: (args) => {
    return <StoryChild args={args} />;
  },
};

export const Inside: Story = {
  args: {
    motion: 'inside',
  },
  render: (args) => {
    return <StoryChild args={args} />;
  },
};

interface StoryChildProps {
  args: { [key: string]: any };
}

function StoryChild(props: StoryChildProps) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <View style={styles?.container}>
      <View style={styles?.content}>
        <WaveCircleAnimation {...props?.args} color={colors?.primary} isVisible>
          <Feather
            name="phone-outgoing"
            color={colors?.primary}
            size={responsive?.size(24)}
          />
        </WaveCircleAnimation>
      </View>
    </View>
  );
}

function makeStyles({ colors }: MakeStyles) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    content: {
      padding: responsive?.size(50),
    },
  });

  return styles;
}
