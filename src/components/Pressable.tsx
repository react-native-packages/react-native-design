import {
  Pressable as RNPressable,
  StyleSheet as RNStyleSheet,
} from 'react-native';

import type { PropsWithChildren } from 'react';
import type {
  ColorValue as RNColorValue,
  PressableProps as RNPressableProps,
} from 'react-native';

import { useAppTheme } from '../hooks';

import type { MakeStyles } from '../types';

interface PressableProps extends RNPressableProps {
  opacity?: number;
  color?: RNColorValue;
  pressedOpacity?: number;
  pressedColor?: RNColorValue;
}

function Pressable(props: PropsWithChildren<PressableProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors, ...props });

  return (
    <RNPressable
      style={({ pressed }) => [pressed ? styles?.pressed : styles?.notPressed]}
      {...props}
    >
      {props?.children}
    </RNPressable>
  );
}

interface CustomMakeStyles extends MakeStyles, Partial<PressableProps> {}

function makeStyles(args: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    notPressed: {
      backgroundColor: args?.color ?? args?.colors?.background,
      opacity: args?.opacity ?? 1,
    },
    pressed: {
      backgroundColor: args?.pressedColor ?? args?.colors?.background,
      opacity: args?.pressedOpacity ?? 0.6,
    },
  });

  return styles;
}

export type { PressableProps };
export { Pressable };
