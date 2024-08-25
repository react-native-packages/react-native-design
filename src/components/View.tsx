import React from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';

import type { PropsWithChildren } from 'react';
import type { ViewProps as RNViewProps } from 'react-native';

import { useAppTheme } from '../hooks';
import type { MakeStyles, BaseThemeVariant } from '../types';

interface ViewProps extends RNViewProps {
  theme?: BaseThemeVariant;
}

function View(props: PropsWithChildren<ViewProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors, theme: props?.theme });

  return (
    <RNView {...props} style={[styles?.containerColor, props?.style]}>
      {props?.children}
    </RNView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  theme?: BaseThemeVariant;
}

function makeStyles({ colors, theme }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    containerColor: {
      backgroundColor: theme
        ? colors?.[`${theme}Container`]
        : colors?.background,
    },
  });

  return styles;
}

export type { ViewProps };
export { View };
