import { StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle, ColorValue } from 'react-native';

import { colors, appColors } from '../../themes/appColors';
import type { ButtonVariant } from '../../types/props';
import { responsive } from '../../helpers';

const buttonStyles = StyleSheet.create({
  buttonBorder: {
    borderRadius: responsive.size(5),
    borderStyle: 'solid',
    borderWidth: 2,
  },
  borderButton: {
    borderColor: appColors?.primary,
  },
  noBorderButton: {},
  disabledBorderButton: {
    borderColor: colors?.grey?.dark?.main,
  },
});

function getButtonBorderStyle(args: {
  variant: ButtonVariant;
  disabled?: boolean;
}): Array<StyleProp<ViewStyle>> {
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
  variant: ButtonVariant;
  disabled?: boolean;
  color?: ColorValue;
}): ColorValue {
  if (args?.disabled) {
    return colors?.grey?.dark?.main;
  }

  if (args?.color) {
    return args?.color;
  }

  switch (args?.variant) {
    case 'contained':
      return colors?.white?.normal?.main;
    case 'outlined':
      return appColors?.primary;
    case 'text':
      return appColors?.primary;
  }
}

function getButtonBackgroundColor(args: {
  variant: ButtonVariant;
  disabled?: boolean;
  color?: ColorValue;
}): ColorValue {
  if (!args?.disabled && args?.color) {
    return args?.color;
  }

  switch (args?.variant) {
    case 'contained':
      return args?.disabled ? colors?.grey?.light?.main : appColors?.primary;
    case 'outlined':
      return args?.disabled
        ? colors?.grey?.light?.main
        : appColors?.transparent;
    case 'text':
      return appColors?.transparent;
  }
}

export {
  buttonStyles,
  getButtonBorderStyle,
  getButtonContentColor,
  getButtonBackgroundColor,
};
