/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text as RNText, StyleSheet as RNStyleSheet } from 'react-native';
import type { TextProps as RNTextProps } from 'react-native';

import { responsive } from './../helpers';
import { colors } from '../themes/appColors';

type TextVariant = 'title' | 'text' | 'label' | 'error' | 'button';

interface TextProps extends RNTextProps {
  variant?: TextVariant;
}

function Text(props: TextProps) {
  return (
    <RNText
      {...props}
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      style={[
        textStyles?.common,
        textStyles[props?.variant ?? 'text'],
        props?.disabled ? textStyles?.disabled : undefined,
        props?.style,
      ]}
      numberOfLines={props?.numberOfLines}
      disabled={props?.disabled}
    >
      {props?.children}
    </RNText>
  );
}

const textStyles = RNStyleSheet.create({
  common: {
    color: colors?.black?.normal?.main,
  },
  text: {},
  title: {
    fontSize: responsive.size(20),
    fontWeight: 'bold',
  },
  label: {
    color: colors?.black?.normal?.main,
    fontSize: responsive.size(15),
    fontWeight: '500',
  },
  error: {
    color: colors?.monaLisa?.normal?.main,
    fontSize: responsive.size(14),
  },
  button: {
    fontSize: responsive.size(18),
    fontWeight: 'bold',
    includeFontPadding: false,
    lineHeight: responsive.height(25),
  },
  disabled: {
    color: colors?.grey?.light?.main,
  },
});

export type { TextVariant, TextProps };
export { Text, textStyles };
