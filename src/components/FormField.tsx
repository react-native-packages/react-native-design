import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { TestProps } from '../types';
import { Text } from './Text';
import { colors } from '../themes';

interface FormFieldProps extends TestProps {
  label?: string;
  touched?: boolean;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  isDisabled?: boolean;
}

function FormField(props: PropsWithChildren<FormFieldProps>) {
  return (
    <View
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 15,
  },
});

export type { FormFieldProps };
export { FormField };
