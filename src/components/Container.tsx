import React from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';

import type { PropsWithChildren } from 'react';
import type { ViewProps as RNViewProps } from 'react-native';

import { useAppTheme } from '../hooks';
import type { MakeStyles, BaseThemeVariant } from '../types';

interface ContainerProps extends RNViewProps {
  theme?: BaseThemeVariant;
}

function Container(props: PropsWithChildren<ContainerProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors, theme: props?.theme });

  return (
    <RNView
      {...props}
      style={[styles?.container, styles?.containerColor, props?.style]}
    >
      {props?.children}
    </RNView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  theme?: BaseThemeVariant;
}

function makeStyles({ colors, theme }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      flex: 1,
    },
    containerColor: {
      backgroundColor: theme
        ? colors?.[`${theme}Container`]
        : colors?.background,
    },
  });

  return styles;
}

export type { ContainerProps };
export { Container };
