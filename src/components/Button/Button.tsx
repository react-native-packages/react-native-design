import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle, ColorValue } from 'react-native';

import type {
  ButtonLoadingPosition,
  ButtonVariant,
  TestProps,
} from '../../types/props';
import { Text } from '../Text';
import { responsive } from '../../helpers';
import {
  getButtonBorderStyle,
  getButtonContentColor,
  getButtonBackgroundColor,
} from '../../utils';
import { ButtonAddon } from './ButtonAddon';

interface ButtonProps extends TestProps {
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  title?: string;
  leftIcon?: ReactNode;
  leftIconName?: string;
  leftIconColor?: string;
  leftIconSize?: number;
  rightIcon?: ReactNode;
  rightIconName?: string;
  rightIconColor?: string;
  rightIconSize?: number;
  disabled?: boolean;
  variant?: ButtonVariant;
  titleStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  loadingPosition?: ButtonLoadingPosition;
  loaderColor?: ColorValue;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const variantProp: ButtonVariant = props?.variant ?? 'contained';
  return (
    <Pressable
      testID={`${props?.testID}.container`}
      accessible={props?.accessible}
      accessibilityLabel={`${props?.accessibilityLabel}.container`}
      disabled={props?.disabled}
      onPress={props?.onPress}
      style={({ pressed }) => [
        {
          backgroundColor: getButtonBackgroundColor({
            variant: variantProp,
            disabled: props?.disabled,
          }),
        },
        pressed ? styles?.pressedButton : styles?.notPressedButton,
        styles?.container,
        getButtonBorderStyle({
          variant: variantProp,
          disabled: props?.disabled,
        }),
        props?.containerStyle,
      ]}
    >
      <View
        testID={`${props?.testID}.content`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.content`}
        style={[styles?.content, props?.contentStyle]}
      >
        <ButtonAddon
          testID={`${props?.testID}.addon.right`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.addon.right`}
          isLoading={
            props?.isLoading &&
            (props?.loadingPosition === 'left' || !props?.loadingPosition)
          }
          loaderColor={getButtonContentColor({
            variant: variantProp,
            disabled: props?.disabled,
            color: props?.loaderColor,
          })}
          icon={props?.leftIcon}
          iconName={props?.leftIconName}
          iconSize={props?.leftIconSize}
          iconColor={getButtonContentColor({
            variant: variantProp,
            disabled: props?.disabled,
            color: props?.leftIconColor,
          })}
        />
        <Text
          testID={`${props?.testID}.title`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.title`}
          variant="button"
          numberOfLines={1}
          style={[
            {
              color: getButtonContentColor({
                variant: variantProp,
                disabled: props?.disabled,
                color: props?.leftIconColor,
              }),
            },
            props?.titleStyle,
          ]}
        >
          {props?.title}
        </Text>
        <ButtonAddon
          testID={`${props?.testID}.addon.right`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.addon.right`}
          isLoading={props?.isLoading && props?.loadingPosition === 'right'}
          loaderColor={getButtonContentColor({
            variant: variantProp,
            disabled: props?.disabled,
            color: props?.loaderColor,
          })}
          icon={props?.rightIcon}
          iconName={props?.rightIconName}
          iconSize={props?.rightIconSize}
          iconColor={getButtonContentColor({
            variant: variantProp,
            disabled: props?.disabled,
            color: props?.rightIconColor,
          })}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsive.size(15),
    paddingVertical: responsive.height(10),
  },
  content: {
    alignItems: 'center',
    columnGap: responsive.size(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pressedButton: { opacity: 0.6 },
  notPressedButton: { opacity: 1 },
});

export type { ButtonProps };
export { Button };
