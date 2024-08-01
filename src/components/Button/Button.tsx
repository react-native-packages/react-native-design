import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import {
  Pressable as RNPressable,
  StyleSheet as RNStyleSheet,
  View as RNView,
} from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
  ColorValue as RNColorValue,
} from 'react-native';

import type {
  BaseProps,
  ButtonLoadingPosition,
  ButtonVariant,
  MakeStyles,
} from '../../types';
import { Text } from '../Text';
import { responsive } from '../../helpers';
import {
  getButtonBorderStyle,
  getButtonContentColor,
  getButtonBackgroundColor,
} from '../../utils';
import { ButtonAddon } from './ButtonAddon';
import { useAppTheme } from '../../hooks';

interface ButtonProps extends BaseProps {
  onPress?: () => void;
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
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
  titleStyle?: RNStyleProp<RNTextStyle>;
  isLoading?: boolean;
  loadingPosition?: ButtonLoadingPosition;
  loaderColor?: RNColorValue;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const variantProp: ButtonVariant = props?.variant ?? 'contained';

  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <RNPressable
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
            colors,
          }),
        },
        pressed ? styles?.pressedButton : styles?.notPressedButton,
        styles?.container,
        getButtonBorderStyle({
          variant: variantProp,
          disabled: props?.disabled,
          colors,
        }),
        props?.containerStyle,
      ]}
    >
      <RNView
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
            colors,
          })}
          icon={props?.leftIcon}
          iconName={props?.leftIconName}
          iconSize={props?.leftIconSize}
          iconColor={getButtonContentColor({
            variant: variantProp,
            disabled: props?.disabled,
            color: props?.leftIconColor,
            colors,
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
                colors,
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
            colors,
          })}
          icon={props?.rightIcon}
          iconName={props?.rightIconName}
          iconSize={props?.rightIconSize}
          iconColor={getButtonContentColor({
            variant: variantProp,
            disabled: props?.disabled,
            color: props?.rightIconColor,
            colors,
          })}
        />
      </RNView>
    </RNPressable>
  );
}

function makeStyles({ colors: _colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
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

  return styles;
}

export type { ButtonProps };
export { Button };
