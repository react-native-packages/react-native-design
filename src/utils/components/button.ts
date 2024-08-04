import { StyleSheet } from 'react-native';

import type { StyleProp, ViewStyle, ColorValue } from 'react-native';

import { responsive } from '../../helpers';

import type {
  ButtonShapeVariant,
  ButtonThemeVariant,
  ButtonVariant,
} from '../../types/props';
import type { MakeStyles } from '../../types';
import type { ThemeColors } from '../../themes';

interface CustomMakeStyles extends MakeStyles {
  theme: ButtonThemeVariant;
  shape: ButtonShapeVariant;
}

function getButtonBorderRadius(shape: ButtonShapeVariant) {
  switch (shape) {
    case 'rect':
      return responsive.size(5);

    case 'rect-sharp':
      return 0;

    case 'round':
      return responsive.size(30);
  }
}

function makeButtonStyles({ colors, theme, shape }: CustomMakeStyles) {
  const buttonStyles = StyleSheet.create({
    buttonBorder: {
      borderRadius: getButtonBorderRadius(shape),
      borderStyle: 'solid',
      borderWidth: 2,
    },
    borderButton: {
      borderColor: colors?.[theme],
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
  theme: ButtonThemeVariant;
  shape: ButtonShapeVariant;
  disabled?: boolean;
}): Array<StyleProp<ViewStyle>> {
  const buttonStyles = makeButtonStyles({
    colors: args?.colors,
    theme: args?.theme,
    shape: args?.shape,
  });

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
  theme: ButtonThemeVariant;
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
      return args?.colors?.[args?.theme];
    case 'text':
      return args?.colors?.[args?.theme];
  }
}

function getButtonBackgroundColor(args: {
  colors: ThemeColors;
  variant: ButtonVariant;
  theme: ButtonThemeVariant;
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
        : args?.colors?.[args?.theme];
    case 'outlined':
      return args?.disabled ? args?.colors?.onSurfaceDisabled : 'transparent';
    case 'text':
      return 'transparent';
  }
}

export {
  makeButtonStyles,
  getButtonBorderStyle,
  getButtonContentColor,
  getButtonBackgroundColor,
};
