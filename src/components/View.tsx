import React from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';

import type { PropsWithChildren } from 'react';
import type { ViewProps as RNViewProps } from 'react-native';

import { useAppTheme } from '../hooks';
import type { MakeStyles } from '../types';

type ViewProps = RNViewProps;

function View(props: PropsWithChildren<ViewProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <RNView {...props} style={[styles?.containerColor, props?.style]}>
      {props?.children}
    </RNView>
  );
}

function makeStyles({ colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
    containerColor: {
      backgroundColor: colors?.background,
    },
  });

  return styles;
}

export type { ViewProps };
export { View };
