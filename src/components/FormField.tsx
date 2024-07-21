import React from 'react';
import type { PropsWithChildren } from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import type { BaseProps } from '../types';
import { Text } from './Text';
import { colors } from '../themes';
import { responsive } from '../helpers';

interface FormFieldProps extends BaseProps {
  label?: string;
  touched?: boolean;
  error?: string;
  containerStyle?: RNStyleProp<RNViewStyle>;
  labelStyle?: RNStyleProp<RNTextStyle>;
  errorStyle?: RNStyleProp<RNTextStyle>;
  isDisabled?: boolean;
}

function FormField(props: PropsWithChildren<FormFieldProps>) {
  return (
    <RNView
      testID={`${props?.testID}.container`}
      accessible={props?.accessible}
      accessibilityLabel={`${props?.accessibilityLabel}.container`}
      style={[styles?.container, props?.containerStyle]}
      pointerEvents={props?.isDisabled ? 'none' : 'auto'}
    >
      {props?.label && (
        <Text
          variant={
            props?.isDisabled
              ? 'label'
              : props?.touched && props?.error
              ? 'error'
              : 'label'
          }
          disabled={props?.isDisabled}
          style={
            (props?.labelStyle,
            {
              color: props?.isDisabled
                ? colors?.grey?.normal?.main
                : colors?.black?.normal?.main,
            })
          }
        >
          {props?.label}
        </Text>
      )}
      {props?.children}
      {!props?.isDisabled && props?.touched && props?.error && (
        <Text
          variant="error"
          testID={`${props?.testID}.errorText`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.errorText`}
          style={props?.errorStyle}
        >
          {props?.error}
        </Text>
      )}
    </RNView>
  );
}

const styles = RNStyleSheet.create({
  container: {
    rowGap: responsive.height(10),
  },
});

export type { FormFieldProps };
export { FormField };
