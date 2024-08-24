import React from 'react';
import {
  Pressable as RNPressable,
  StyleSheet as RNStyleSheet,
  View as RNView,
} from 'react-native';
import { responsive } from '@rnpack/utils';

import type { PropsWithChildren, ReactNode } from 'react';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
  ColorValue as RNColorValue,
} from 'react-native';

import { Text } from '../Text';
import {
  getButtonBorderStyle,
  getButtonContentColor,
  getButtonBackgroundColor,
} from '../../utils';
import { ButtonAddon } from './ButtonAddon';
import { useAppTheme } from '../../hooks';

import type {
  BaseProps,
  ButtonLoadingPosition,
  ButtonShapeVariant,
  ButtonThemeVariant,
  ButtonVariant,
  MakeStyles,
  SpinnerSize,
} from '../../types';
import type { FontAwesomeIconName } from '../icons';

interface ButtonProps extends BaseProps {
  onPress?: () => void;
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
  title?: string;
  titleColor?: RNColorValue;
  leftIcon?: ReactNode;
  leftIconName?: FontAwesomeIconName;
  leftIconColor?: RNColorValue;
  leftIconSize?: number;
  rightIcon?: ReactNode;
  rightIconName?: FontAwesomeIconName;
  rightIconColor?: RNColorValue;
  rightIconSize?: number;
  disabled?: boolean;
  variant?: ButtonVariant;
  titleStyle?: RNStyleProp<RNTextStyle>;
  isLoading?: boolean;
  loaderSize?: SpinnerSize;
  loadingPosition?: ButtonLoadingPosition;
  loaderColor?: RNColorValue;
  theme?: ButtonThemeVariant;
  shape?: ButtonShapeVariant;
  fontSize?: number;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const variantProp: ButtonVariant = props?.variant ?? 'contained';
  const themeProp: ButtonThemeVariant = props?.theme ?? 'primary';
  const shapeProp: ButtonShapeVariant = props?.shape ?? 'rect';

  const { colors } = useAppTheme();

  const styles = makeStyles({ colors, fontSize: props?.fontSize });

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
            theme: themeProp,
            disabled: props?.disabled,
            colors,
          }),
        },
        pressed ? styles?.pressedButton : styles?.notPressedButton,
        styles?.container,
        getButtonBorderStyle({
          variant: variantProp,
          theme: themeProp,
          shape: shapeProp,
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
          loaderSize={props?.loaderSize}
          loaderColor={getButtonContentColor({
            variant: variantProp,
            disabled: props?.disabled,
            theme: themeProp,
            color: props?.loaderColor,
            colors,
          })}
          icon={props?.leftIcon}
          iconName={props?.leftIconName}
          iconSize={
            props?.leftIconSize ??
            responsive?.size((props?.fontSize ?? 18) * 1.2)
          }
          iconColor={getButtonContentColor({
            variant: variantProp,
            theme: themeProp,
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
                theme: themeProp,
                disabled: props?.disabled,
                color: props?.titleColor,
                colors,
              }),
              fontSize: props?.fontSize,
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
          loaderSize={props?.loaderSize}
          loaderColor={getButtonContentColor({
            variant: variantProp,
            theme: themeProp,
            disabled: props?.disabled,
            color: props?.loaderColor,
            colors,
          })}
          icon={props?.rightIcon}
          iconName={props?.rightIconName}
          iconSize={
            props?.rightIconSize ??
            responsive?.size((props?.fontSize ?? 18) * 1.2)
          }
          iconColor={getButtonContentColor({
            variant: variantProp,
            theme: themeProp,
            disabled: props?.disabled,
            color: props?.rightIconColor,
            colors,
          })}
        />
      </RNView>
    </RNPressable>
  );
}

interface CustomMakeStyles extends MakeStyles {
  fontSize?: number;
}

function makeStyles({ colors: _colors, fontSize }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      paddingHorizontal: responsive.size((fontSize ?? 18) * 0.6),
      paddingVertical: responsive.height((fontSize ?? 18) * 0.4),
    },
    content: {
      alignItems: 'center',
      columnGap: responsive.size((fontSize ?? 20) * 0.5),
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
