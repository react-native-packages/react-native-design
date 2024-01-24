import React, { type ReactNode } from 'react';
import {
  Text as RNText,
  StyleSheet,
  type StyleProp,
  type TextStyle as RNTextStyle,
} from 'react-native';
import {
  responsiveHeight,
  responsiveSize,
} from 'react-native-responsive-helper';

export type TextVariant = 'title' | 'text' | 'label' | 'error' | 'button';

export interface TextProps {
  variant?: TextVariant;
  style?: StyleProp<RNTextStyle>;
  numberOfLines?: number;
  children?: ReactNode;
  testID?: string;
}

function Text(props: TextProps) {
  return (
    <RNText
      testID={props?.testID}
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

export const textStyles = StyleSheet.create({
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
    fontSize: responsiveSize(15),
    fontWeight: '500',
  },
  error: {
    color: '#FF9494',
    fontSize: responsiveSize(14),
  },
  button: {
    fontWeight: 'bold',
    fontSize: responsiveSize(20),
    includeFontPadding: false,
    lineHeight: responsiveHeight(25),
  },
});

export default Text;
