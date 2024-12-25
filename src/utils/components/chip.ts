import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';
import { responsive } from '@rnpack/utils';

import type {
  ChipShape,
  ChipTheme,
  ChipVariant,
  MakeStyles,
} from '../../types';
import type { ThemeColors } from '../../themes';

interface GetChipColorReturns {
  color: RNColorValue;
  backgroundColor: RNColorValue;
  borderColor: RNColorValue;
}

interface GetChipColorArgs extends MakeStyles {
  theme: ChipTheme;
  variant: ChipVariant;
}

interface GetChipStyleArgs {
  theme: ChipTheme;
  variant: ChipVariant;
  colors: ThemeColors;
}

function getChipColor({
  colors,
  theme,
  variant,
}: GetChipColorArgs): GetChipColorReturns {
  const defaultValue = {
    color: variant === 'contained' ? colors?.background : colors?.onBackground,
    backgroundColor: colors?.onBackground,
    borderColor: colors?.onBackground,
  };

  switch (theme) {
    case 'default':
      return defaultValue;

    case 'warn':
      return {
        color: variant === 'contained' ? colors?.onWarnContainer : colors?.warn,
        backgroundColor: colors?.warnContainer,
        borderColor: colors?.warn,
      };

    case 'info':
      return {
        color: variant === 'contained' ? colors?.onInfoContainer : colors?.info,
        backgroundColor: colors?.infoContainer,
        borderColor: colors?.info,
      };

    case 'success':
      return {
        color:
          variant === 'contained'
            ? colors?.onSuccessContainer
            : colors?.success,
        backgroundColor: colors?.successContainer,
        borderColor: colors?.success,
      };

    case 'error':
      return {
        color:
          variant === 'contained' ? colors?.onErrorContainer : colors?.error,
        backgroundColor: colors?.errorContainer,
        borderColor: colors?.error,
      };

    default:
      return defaultValue;
  }
}

function getChipShape(shape: ChipShape): RNStyleProp<RNViewStyle> {
  switch (shape) {
    case 'rect':
      return {
        borderRadius: responsive?.size(10),
      };

    case 'rect-sharp':
      return {
        borderRadius: 0,
      };

    case 'round':
      return {
        borderRadius: responsive?.size(100),
      };

    default:
      return {
        borderRadius: responsive?.size(10),
      };
  }
}

function getChipStyle(args: GetChipStyleArgs): RNStyleProp<RNViewStyle> {
  const { borderColor } = getChipColor({
    theme: args?.theme,
    colors: args?.colors,
    variant: args?.variant,
  });

  switch (args?.variant) {
    case 'contained':
      return {
        borderColor: args?.colors?.transparent,
        borderWidth: 0,
      };

    case 'outlined':
      return {
        borderColor: borderColor,
        backgroundColor: args?.colors?.transparent,
        borderWidth: 1,
      };

    case 'text':
      return {
        borderColor: args?.colors?.transparent,
        backgroundColor: args?.colors?.transparent,
        borderWidth: 1,
      };

    default:
      return {
        borderColor: args?.colors?.transparent,
      };
  }
}

export type { GetChipColorReturns, GetChipColorArgs, GetChipStyleArgs };
export { getChipColor, getChipShape, getChipStyle };
