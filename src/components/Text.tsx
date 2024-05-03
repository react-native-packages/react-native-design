import React, { type ReactNode } from 'react';
import {
  Text as RNText,
  StyleSheet,
  type StyleProp,
  type TextStyle as RNTextStyle,
} from 'react-native';

import { responsive } from './../helpers';

type TextVariant = 'title' | 'text' | 'label' | 'error' | 'button';

interface TextProps {
  variant?: TextVariant;
  style?: StyleProp<RNTextStyle>;
  numberOfLines?: number;
  children?: ReactNode;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
}

function Text(props: TextProps) {
  return (
    <RNText
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      style={[
        textStyles?.common,
        textStyles?.text,
        textStyles[props?.variant ?? 'text'],
        props?.style,
      ]}
      numberOfLines={props?.numberOfLines}
    >
      {props?.children}
    </RNText>
  );
}

const textStyles = StyleSheet.create({
  common: {
    color: '#000',
  },
  text: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: 'black',
    fontSize: responsive.size(15),
    fontWeight: '500',
  },
  error: {
    color: '#FF9494',
    fontSize: responsive.size(14),
  },
  button: {
    fontWeight: 'bold',
    fontSize: responsive.size(20),
    includeFontPadding: false,
    lineHeight: responsive.height(25),
  },
});

export type { TextVariant, TextProps };
export { Text, textStyles };
