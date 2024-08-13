import React from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';

import type { PropsWithChildren } from 'react';
import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { useAppTheme } from './../hooks';
import type { BaseProps, MakeStyles } from './../types';

interface ShadowEffectProps extends BaseProps {
  containerStyle?: RNStyleProp<RNViewStyle>;
  isNoBoxShadow?: boolean;
}

function ShadowEffect(props: PropsWithChildren<ShadowEffectProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <RNView
      style={[
        styles?.container,
        props?.isNoBoxShadow ? undefined : styles?.boxShadow,
        props?.containerStyle,
      ]}
    >
      {props?.children}
    </RNView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  shadowColor?: RNColorValue;
}

function makeStyles({ colors, shadowColor }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {},
    boxShadow: {
      elevation: 5,
      shadowColor: shadowColor ?? colors?.inverseSurface,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      backgroundColor: colors?.transparent,
      borderRadius: 2,
    },
  });

  return styles;
}

export type { ShadowEffectProps };
export { ShadowEffect };
