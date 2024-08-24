import React from 'react';
import { Text as RNText, StyleSheet as RNStyleSheet } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { TextProps as RNTextProps } from 'react-native';

import { useAppTheme } from '../hooks';
import type { MakeStyles } from '../types';

type TextVariant = 'title' | 'text' | 'label' | 'error' | 'button';

interface TextProps extends RNTextProps {
  variant?: TextVariant;
}

function Text(props: TextProps) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <RNText
      {...props}
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      style={[
        styles?.common,
        styles[props?.variant ?? 'text'],
        props?.disabled ? styles?.disabled : undefined,
        props?.style,
      ]}
      numberOfLines={props?.numberOfLines}
      disabled={props?.disabled}
    >
      {props?.children}
    </RNText>
  );
}

function makeStyles({ colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
    common: {
      color: colors?.onBackground,
    },
    text: {},
    title: {
      fontSize: responsive.size(20),
      fontWeight: 'bold',
    },
    label: {
      color: colors?.onBackground,
      fontSize: responsive.size(15),
      fontWeight: '500',
    },
    error: {
      color: colors?.error,
      fontSize: responsive.size(14),
    },
    button: {
      fontSize: responsive.size(18),
      fontWeight: 'bold',
      includeFontPadding: false,
    },
    disabled: {
      color: colors?.onSurfaceDisabled,
    },
  });

  return styles;
}

export type { TextVariant, TextProps };
export { Text };
