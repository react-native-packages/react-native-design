import React from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { PropsWithChildren } from 'react';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { Text } from './Text';
import { useAppTheme } from '../hooks';

import type { BaseProps, InputVariant, MakeStyles } from '../types';

interface FormFieldProps extends BaseProps {
  label?: string;
  touched?: boolean;
  error?: string;
  containerStyle?: RNStyleProp<RNViewStyle>;
  labelStyle?: RNStyleProp<RNTextStyle>;
  errorStyle?: RNStyleProp<RNTextStyle>;
  isDisabled?: boolean;
  variant?: InputVariant;
}

function FormField(props: PropsWithChildren<FormFieldProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    isError: Boolean(props?.error) && props?.touched,
    isDisabled: props?.isDisabled,
  });

  function getInputBorderVariant(variant?: InputVariant) {
    switch (variant) {
      case 'base':
        return [styles?.inputBaseBorder, styles?.border];

      case 'border':
        return [styles?.inputBorder, styles?.border];

      case 'noborder':
        return styles?.inputNoBorder;

      default:
        return styles?.inputNoBorder;
    }
  }

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
          variant={'label'}
          disabled={props?.isDisabled}
          style={[props?.labelStyle, styles?.label]}
        >
          {props?.label}
        </Text>
      )}
      <RNView style={getInputBorderVariant(props?.variant)}>
        {props?.children}
      </RNView>
      {!props?.isDisabled && props?.touched && props?.error && (
        <Text
          testID={`${props?.testID}.errorText`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.errorText`}
          style={[props?.errorStyle, styles?.errorText]}
        >
          {props?.error}
        </Text>
      )}
    </RNView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  variant?: InputVariant;
}

function makeStyles({ colors, isError, isDisabled }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      rowGap: responsive.height(10),
    },
    inputBorder: {
      borderWidth: 0.8,
      paddingHorizontal: responsive?.size(10),
    },
    inputNoBorder: {
      borderWidth: 0,
    },
    inputBaseBorder: {
      borderBottomWidth: 0.8,
      paddingHorizontal: responsive?.size(5),
    },
    border: {
      borderColor: isDisabled
        ? colors?.onSurfaceDisabled
        : isError
        ? colors?.error
        : colors?.onSurface,
      borderRadius: responsive?.size(5),
    },
    label: {
      color: isDisabled
        ? colors?.onSurfaceDisabled
        : isError
        ? colors?.error
        : colors?.onSurface,
    },
    errorText: {
      color: colors?.error,
    },
  });

  return styles;
}

export type { FormFieldProps };
export { FormField };
