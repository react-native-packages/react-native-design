import React, { forwardRef, useState } from 'react';
import type { ReactNode, Ref } from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import type {
  TextInputProps as RNTextInputProps,
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
  TextStyle as RNTextStyle,
  ViewStyle,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { IconButton } from './IconButton';
import { responsive } from '../helpers';
import { colors } from '../themes/appColors';
import type { TestProps } from '../types';
import { FormField } from './FormField';

interface TextInputProps extends TestProps {
  name: string;
  value?: string;
  label?: string;
  leftIcon?: ReactNode;
  leftIconName?: string;
  leftIconSize?: number;
  leftIconColor?: ColorValue;
  onPressLeftIcon?: () => void;
  rightIcon?: ReactNode;
  rightIconName?: string;
  rightIconSize?: number;
  rightIconColor?: ColorValue;
  onPressRightIcon?: () => void;
  autoCapitalize?: Pick<RNTextInputProps, 'autoCapitalize'>['autoCapitalize'];
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  onChangeText?: (text: string) => void;
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions;
  touched?: boolean;
  error?: string;
  labelStyle?: StyleProp<RNTextStyle>;
  inputStyle?: StyleProp<RNTextStyle>;
  editable?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  showPasswordVisibility?: boolean;
  secureTextEntry?: boolean;
  textInputProps?: RNTextInputProps;
  errorStyle?: StyleProp<RNTextStyle>;
}

const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: Ref<RNTextInput>
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function onChangeText(text: string) {
    if (props?.onChangeText) {
      props?.onChangeText(text);
    }
  }

  function onBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
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
    >
      <View
        testID={`${props?.testID}.content`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.content`}
        style={styles?.inputIconSection}
      >
        {props?.leftIcon ||
          (props?.leftIconName && (
            <View
              testID={`${props?.testID}.leftIconContainer`}
              accessible={props?.accessible}
              accessibilityLabel={`${props?.accessibilityLabel}.leftIconContainer`}
              style={styles?.leftIconContainer}
            >
              <IconButton
                containerStyle={styles?.iconButtonContainer}
                onPress={props?.onPressLeftIcon}
              >
                <FontAwesomeIcon
                  testID={`${props?.testID}.leftIcon`}
                  accessible={props?.accessible}
                  accessibilityLabel={`${props?.accessibilityLabel}.leftIcon`}
                  name={props?.leftIconName}
                  size={props?.leftIconSize ?? 24}
                  color={
                    !props?.editable
                      ? colors?.grey?.light?.main
                      : props?.touched && props?.error
                      ? colors?.red?.normal?.main
                      : props?.leftIconColor ?? '#676767'
                  }
                  disabled={!props?.editable}
                />
              </IconButton>
            </View>
          ))}
        <View style={styles?.inputContent}>
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
            editable={props?.editable}
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
            placeholderTextColor={props?.placeholderTextColor ?? '#D3D3D3'}
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
                props?.touched && props?.error
                  ? colors?.red?.normal?.main
                  : undefined
              }
            />
          )}
        </View>
        {props?.rightIcon ||
          (props?.rightIconName && (
            <View
              testID={`${props?.testID}.rightIconContainer`}
              accessible={props?.accessible}
              accessibilityLabel={`${props?.accessibilityLabel}.rightIconContainer`}
              style={styles?.rightIconContainer}
            >
              <IconButton
                containerStyle={styles?.iconButtonContainer}
                onPress={props?.onPressRightIcon}
              >
                <FontAwesomeIcon
                  testID={`${props?.testID}.rightIcon`}
                  accessible={props?.accessible}
                  accessibilityLabel={`${props?.accessibilityLabel}.rightIcon`}
                  name={props?.rightIconName}
                  size={props?.rightIconSize ?? 24}
                  color={
                    !props?.editable
                      ? colors?.grey?.light?.main
                      : props?.touched && props?.error
                      ? colors?.red?.normal?.main
                      : props?.rightIconColor ?? '#676767'
                  }
                  disabled={!props?.editable}
                />
              </IconButton>
            </View>
          ))}
      </View>
    </FormField>
  );
});

const styles = StyleSheet.create({
  errorText: {
    color: colors?.monaLisa?.normal?.main,
    fontSize: responsive.size(14),
  },
  inputContainer: {
    rowGap: 15,
  },
  labelStyle: {
    color: colors?.black?.normal?.main,
    fontSize: 16,
    fontWeight: '500',
  },
  inputContent: {
    flex: 1,
    height: responsive.height(30),
  },
  inputStyle: {
    borderBottomWidth: 0.5,
    color: colors?.black?.normal?.main,
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
    padding: 0,
    position: 'absolute',
    right: 0,
  },
  editableInput: {
    color: colors?.black?.normal?.main,
  },
  uneditableInput: {
    borderColor: colors?.grey?.light?.main,
    color: colors?.grey?.light?.main,
  },
  errorInput: {
    borderColor: colors?.red?.normal?.main,
    color: colors?.red?.normal?.main,
  },
  iconButtonContainer: {
    padding: 0,
  },
});

export type { TextInputProps };
export { TextInput };
