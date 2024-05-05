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
  TextStyle,
  ViewStyle,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { IconButton } from './IconButton';
import { Text } from './Text';
import { responsive } from '../helpers';

interface TextInputProps {
  name: string;
  value?: string;
  label?: string;
  icon?: ReactNode;
  iconName?: string;
  iconSize?: number;
  iconColor?: ColorValue;
  autoCapitalize?: Pick<RNTextInputProps, 'autoCapitalize'>['autoCapitalize'];
  multiline?: Pick<RNTextInputProps, 'multiline'>['multiline'];
  numberOfLines?: Pick<RNTextInputProps, 'numberOfLines'>['numberOfLines'];
  maxLength?: Pick<RNTextInputProps, 'maxLength'>['maxLength'];
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  onChangeText?: (text: string) => void;
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions;
  touched?: boolean;
  error?: string;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  editable?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  showPasswordVisibility?: boolean;
  secureTextEntry?: boolean;
  textInputProps?: RNTextInputProps;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
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
    <View
      testID={`${props?.testID}.container`}
      accessible={props?.accessible}
      accessibilityLabel={`${props?.accessibilityLabel}.container`}
      style={[styles?.inputContainer, props?.inputContainerStyle]}
    >
      {props?.label && (
        <Text variant="label" style={props?.labelStyle}>
          {props?.label}
        </Text>
      )}
      <View
        testID={`${props?.testID}.content`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.content`}
        style={styles?.inputIconSection}
      >
        {props?.icon ||
          (props?.iconName && (
            <View
              testID={`${props?.testID}.iconContainer`}
              accessible={props?.accessible}
              accessibilityLabel={`${props?.accessibilityLabel}.iconContainer`}
              style={styles?.iconContainer}
            >
              <FontAwesomeIcon
                testID={`${props?.testID}.leftIcon`}
                accessible={props?.accessible}
                accessibilityLabel={`${props?.accessibilityLabel}.leftIcon`}
                name={props?.iconName}
                size={props?.iconSize ?? 24}
                color={props?.iconColor ?? '#676767'}
              />
            </View>
          ))}
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
            props?.inputStyle,
            props?.editable ?? true
              ? styles?.editableInput
              : styles?.uneditableInput,
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
            size={props?.iconSize ?? 24}
            onPress={togglePasswordVisibility}
            containerStyle={styles?.rightIconButtonContainer}
          />
        )}
      </View>
      {props?.touched && props?.error && (
        <Text
          variant="error"
          testID={`${props?.testID}.errorText`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.errorText`}
        >
          {props?.touched && props?.error}
        </Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  errorText: {
    color: '#FF9494',
    fontSize: 14,
  },
  inputContainer: {
    rowGap: 15,
  },
  labelStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },
  inputStyle: {
    flex: 1,
    width: '100%',
    margin: 5,
    fontWeight: '400',
    borderBottomWidth: 0.5,
    paddingLeft: 10,
    paddingBottom: 5,
    color: '#000000',
    height: responsive.height(30),
  },
  iconContainer: {
    paddingRight: responsive.size(5),
  },
  inputIconSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconButtonContainer: {
    position: 'absolute',
    right: 0,
  },
  editableInput: {
    color: '#000000',
  },
  uneditableInput: {
    color: '#D3D3D3',
  },
});

export type { TextInputProps };
export { TextInput };
