import React, { forwardRef, useState } from 'react';
import {
  View as RNView,
  TextInput as RNTextInput,
  StyleSheet as RNStyleSheet,
} from 'react-native';

import type { ReactNode, Ref } from 'react';
import type {
  TextInputProps as RNTextInputProps,
  ColorValue as RNColorValue,
  KeyboardTypeOptions as RNKeyboardTypeOptions,
  NativeSyntheticEvent as RNNativeSyntheticEvent,
  TextInputFocusEventData as RNTextInputFocusEventData,
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { FontAwesome } from './icons/FontAwesome';
import { IconButton } from './IconButton';
import { responsive } from '../helpers';
import { FormField } from './FormField';
import { useAppTheme } from '../hooks';

import type { BaseProps, InputVariant, MakeStyles } from '../types';

interface TextInputProps extends BaseProps {
  name: string;
  value?: string;
  label?: string;
  leftIcon?: ReactNode;
  leftIconName?: string;
  leftIconSize?: number;
  leftIconColor?: RNColorValue;
  onPressLeftIcon?: () => void;
  rightIcon?: ReactNode;
  rightIconName?: string;
  rightIconSize?: number;
  rightIconColor?: RNColorValue;
  onPressRightIcon?: () => void;
  autoCapitalize?: Pick<RNTextInputProps, 'autoCapitalize'>['autoCapitalize'];
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  placeholder?: string;
  placeholderTextColor?: RNColorValue;
  onChangeText?: (text: string) => void;
  onBlur?: (event: RNNativeSyntheticEvent<RNTextInputFocusEventData>) => void;
  keyboardType?: RNKeyboardTypeOptions;
  touched?: boolean;
  error?: string;
  labelStyle?: RNStyleProp<RNTextStyle>;
  inputStyle?: RNStyleProp<RNTextStyle>;
  editable?: boolean;
  inputContainerStyle?: RNStyleProp<RNViewStyle>;
  showPasswordVisibility?: boolean;
  secureTextEntry?: boolean;
  textInputProps?: RNTextInputProps;
  errorStyle?: RNStyleProp<RNTextStyle>;
  inputContentStyle?: RNStyleProp<RNViewStyle>;
  variant?: InputVariant;
}

const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: Ref<RNTextInput>
) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function onChangeText(text: string) {
    if (props?.onChangeText) {
      props?.onChangeText(text);
    }
  }

  function onBlur(event: RNNativeSyntheticEvent<RNTextInputFocusEventData>) {
    if (props?.onBlur) {
      props?.onBlur(event);
    }
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((state) => !state);
  }

  return (
    <FormField
      label={props?.label}
      touched={props?.touched}
      error={props?.error}
      containerStyle={props?.inputContainerStyle}
      labelStyle={props?.labelStyle}
      errorStyle={props?.errorStyle}
      isDisabled={!props?.editable}
      variant={props?.variant}
    >
      <RNView
        testID={`${props?.testID}.content`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.content`}
        style={styles?.inputIconSection}
      >
        {props?.leftIcon ||
          (props?.leftIconName && (
            <RNView
              testID={`${props?.testID}.leftIconContainer`}
              accessible={props?.accessible}
              accessibilityLabel={`${props?.accessibilityLabel}.leftIconContainer`}
              style={styles?.leftIconContainer}
            >
              <IconButton
                containerStyle={styles?.iconButtonContainer}
                onPress={props?.onPressLeftIcon}
                disabled={!props?.editable}
              >
                <FontAwesome
                  testID={`${props?.testID}.leftIcon`}
                  accessible={props?.accessible}
                  accessibilityLabel={`${props?.accessibilityLabel}.leftIcon`}
                  name={props?.leftIconName}
                  size={props?.leftIconSize ?? 24}
                  color={
                    !props?.editable
                      ? colors?.onSurfaceDisabled
                      : props?.touched && props?.error
                      ? colors?.error
                      : props?.leftIconColor ?? colors?.onSurface
                  }
                />
              </IconButton>
            </RNView>
          ))}
        <RNView style={[styles?.inputContent, props?.inputContentStyle]}>
          <RNTextInput
            ref={ref}
            testID={`${props?.testID}.input`}
            accessible={props?.accessible}
            accessibilityLabel={`${props?.accessibilityLabel}.input`}
            secureTextEntry={
              props?.showPasswordVisibility
                ? !isPasswordVisible
                : props?.secureTextEntry
            }
            editable={props?.editable ?? true}
            autoCapitalize={props?.autoCapitalize}
            style={[
              styles?.inputStyle,
              props?.showPasswordVisibility
                ? styles?.passwordInputStyle
                : undefined,
              props?.inputStyle,
              !props?.editable
                ? styles?.uneditableInput
                : props?.touched && props?.error
                ? styles?.errorInput
                : styles?.editableInput,
            ]}
            value={props?.value}
            placeholder={props?.placeholder}
            placeholderTextColor={
              props?.placeholderTextColor ?? colors?.onSurfaceDisabled
            }
            onChangeText={onChangeText}
            onBlur={onBlur}
            keyboardType={props?.keyboardType ?? 'default'}
            multiline={props?.multiline}
            numberOfLines={props?.numberOfLines}
            maxLength={props?.maxLength}
            {...props?.textInputProps}
          />
          {props?.showPasswordVisibility && (
            <IconButton
              testID={`${props?.testID}.rightIconButton`}
              accessible={props?.accessible}
              accessibilityLabel={`${props?.accessibilityLabel}.righIconButton`}
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={props?.leftIconSize ?? 24}
              onPress={togglePasswordVisibility}
              containerStyle={styles?.passwordVisibilityContainer}
              disabled={!props?.editable}
              color={
                !props?.editable
                  ? colors?.onSurfaceDisabled
                  : props?.touched && props?.error
                  ? colors?.error
                  : colors?.onSurface
              }
            />
          )}
        </RNView>
        {props?.rightIcon ||
          (props?.rightIconName && (
            <RNView
              testID={`${props?.testID}.rightIconContainer`}
              accessible={props?.accessible}
              accessibilityLabel={`${props?.accessibilityLabel}.rightIconContainer`}
              style={styles?.rightIconContainer}
            >
              <IconButton
                containerStyle={styles?.iconButtonContainer}
                onPress={props?.onPressRightIcon}
                disabled={!props?.editable}
              >
                <FontAwesome
                  testID={`${props?.testID}.rightIcon`}
                  accessible={props?.accessible}
                  accessibilityLabel={`${props?.accessibilityLabel}.rightIcon`}
                  name={props?.rightIconName}
                  size={props?.rightIconSize ?? 24}
                  color={
                    !props?.editable
                      ? colors?.onSurfaceDisabled
                      : props?.touched && props?.error
                      ? colors?.error
                      : props?.rightIconColor ?? colors?.primary
                  }
                />
              </IconButton>
            </RNView>
          ))}
      </RNView>
    </FormField>
  );
});

function makeStyles({ colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
    errorText: {
      color: colors?.error,
      fontSize: responsive.size(14),
    },
    inputContainer: {
      rowGap: 15,
    },
    labelStyle: {
      color: colors?.onSurface,
      fontSize: 16,
      fontWeight: '500',
    },
    inputContent: {
      flex: 1,
      height: responsive.height(40),
    },
    inputStyle: {
      color: colors?.onSurface,
      flex: 1,
      fontWeight: '400',
      paddingLeft: responsive.size(5),
      width: '100%',
    },
    passwordInputStyle: {
      paddingRight: responsive.size(25),
    },
    leftIconContainer: {
      paddingRight: responsive.size(5),
    },
    rightIconContainer: {
      paddingLeft: responsive.size(10),
    },
    inputIconSection: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
    },
    passwordVisibilityContainer: {
      bottom: responsive.size(3),
      position: 'absolute',
      right: 0,
    },
    editableInput: {
      color: colors?.onSurface,
    },
    uneditableInput: {
      color: colors?.onSurfaceDisabled,
    },
    errorInput: {
      borderColor: colors?.error,
      color: colors?.error,
    },
    iconButtonContainer: {
      padding: 0,
    },
  });

  return styles;
}

export type { TextInputProps };
export { TextInput };
