import React from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { PropsWithChildren } from 'react';
import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { useAppTheme } from './../hooks';
import type { BaseProps, MakeStyles, BaseThemeVariant } from './../types';

interface ShadowEffectProps extends BaseProps {
  containerStyle?: RNStyleProp<RNViewStyle>;
  isShadowVisible?: boolean;
  radius?: number;
  shadowColor?: RNColorValue;
  backgroundColor?: RNColorValue;
}

function ShadowEffect(props: PropsWithChildren<ShadowEffectProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    radius: props?.radius,
    shadowColor: props?.shadowColor,
    backgroundColor: props?.backgroundColor,
  });

  return (
    <RNView
      style={[
        styles?.container,
        props?.isShadowVisible === false ? undefined : styles?.boxShadow,
        props?.containerStyle,
      ]}
    >
      {props?.children}
    </RNView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  shadowColor?: RNColorValue;
  radius?: number;
  theme?: BaseThemeVariant;
  backgroundColor?: RNColorValue;
}

function makeStyles({
  colors,
  shadowColor,
  radius,
  backgroundColor,
}: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {},
    boxShadow: {
      elevation: 5,
      shadowColor: shadowColor ?? colors?.onBackground,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: radius ?? 3.84,
      backgroundColor: backgroundColor ?? colors?.transparent,
      borderRadius: radius ?? responsive?.size(2),
    },
  });

  return styles;
}

export type { ShadowEffectProps };
export { ShadowEffect };
