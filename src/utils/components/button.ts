import { StyleSheet } from 'react-native';

import type { StyleProp, ViewStyle, ColorValue } from 'react-native';

import { responsive } from '../../helpers';

import type { ButtonVariant } from '../../types/props';
import type { MakeStyles } from '../../types';
import type { ThemeColors } from '../../themes';

function makeButtonStyle({ colors }: MakeStyles) {
  const buttonStyles = StyleSheet.create({
    buttonBorder: {
      borderRadius: responsive.size(5),
      borderStyle: 'solid',
      borderWidth: 2,
    },
    borderButton: {
      borderColor: colors?.primary,
    },
    noBorderButton: {},
    disabledBorderButton: {
      borderColor: colors?.onSurfaceDisabled,
    },
  });

  return buttonStyles;
}

function getButtonBorderStyle(args: {
  colors: ThemeColors;
  variant: ButtonVariant;
  disabled?: boolean;
}): Array<StyleProp<ViewStyle>> {
  const buttonStyles = makeButtonStyle({ colors: args?.colors });

  switch (args?.variant) {
    case 'contained':
      return [
        buttonStyles?.buttonBorder,
        args?.disabled
          ? buttonStyles?.disabledBorderButton
          : buttonStyles?.borderButton,
      ];
    case 'outlined':
      return [
        buttonStyles?.buttonBorder,
        args?.disabled
          ? buttonStyles?.disabledBorderButton
          : buttonStyles?.borderButton,
      ];
    case 'text':
      return [buttonStyles?.noBorderButton];
  }
}

function getButtonContentColor(args: {
  colors: ThemeColors;
  variant: ButtonVariant;
  disabled?: boolean;
  color?: ColorValue;
}): ColorValue {
  if (args?.disabled) {
    return args?.colors?.onSurfaceDisabled;
  }

  if (args?.color) {
    return args?.color;
  }

  switch (args?.variant) {
    case 'contained':
      return args?.colors?.surface;
    case 'outlined':
      return args?.colors?.primary;
    case 'text':
      return args?.colors?.primary;
  }
}

function getButtonBackgroundColor(args: {
  colors: ThemeColors;
  variant: ButtonVariant;
  disabled?: boolean;
  color?: ColorValue;
}): ColorValue {
  if (!args?.disabled && args?.color) {
    return args?.color;
  }

  switch (args?.variant) {
    case 'contained':
      return args?.disabled
        ? args?.colors?.onSurfaceDisabled
        : args?.colors?.primary;
    case 'outlined':
      return args?.disabled ? args?.colors?.onSurfaceDisabled : 'transparent';
    case 'text':
      return 'transparent';
  }
}

export {
  makeButtonStyle,
  getButtonBorderStyle,
  getButtonContentColor,
  getButtonBackgroundColor,
};
