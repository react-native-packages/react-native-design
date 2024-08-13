import React, { Fragment } from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { ReactNode } from 'react';
import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { ShadowEffect } from './../animations';
import { MaterialCommunityIcons } from './icons';
import { useAppTheme } from '../hooks';
import { Text } from './Text';

import type {
  ChipShape,
  ChipTheme,
  BaseProps,
  MakeStyles,
  ChipVariant,
} from '../types';
import type { MaterialCommunityIconName } from './icons';
import type { ThemeColors } from '../themes';

interface GetChipColorReturns {
  color: RNColorValue;
  backgroundColor: RNColorValue;
  borderColor: RNColorValue;
}

interface GetChipColorArgs extends MakeStyles {
  theme: ChipTheme;
  variant: ChipVariant;
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

interface GetChipStyleArgs {
  theme: ChipTheme;
  variant: ChipVariant;
  colors: ThemeColors;
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

interface ChipProps extends BaseProps {
  title: string;
  variant?: ChipVariant;
  theme?: ChipTheme;
  shape?: ChipShape;
  titleStyle?: RNStyleProp<RNTextStyle>;
  containerStyle?: RNStyleProp<RNViewStyle>;
  leftIconName?: MaterialCommunityIconName;
  leftIcon?: ReactNode;
  leftIconSize?: number;
  leftIconColor?: RNColorValue;
  rightIconName?: MaterialCommunityIconName;
  rightIcon?: ReactNode;
  rightIconSize?: number;
  rightIconColor?: RNColorValue;
  isShadow?: boolean;
}

function Chip(props: ChipProps) {
  const themeProp = props?.theme ?? 'default';
  const shapeProp = props?.shape ?? 'round';
  const variantProp = props?.variant ?? 'contained';

  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    theme: themeProp,
    variant: variantProp,
  });

  return (
    <Fragment>
      <ShadowEffect isNoBoxShadow={!props?.isShadow}>
        <RNView
          style={[
            styles?.container,
            getChipShape(shapeProp),
            getChipStyle({ colors, theme: themeProp, variant: variantProp }),
            props?.containerStyle,
          ]}
        >
          {props?.leftIcon ??
            (props?.leftIconName && (
              <MaterialCommunityIcons
                name={props?.leftIconName}
                size={props?.leftIconSize ?? responsive?.size(21)}
                color={
                  props?.leftIconColor ??
                  getChipColor({
                    colors,
                    theme: themeProp,
                    variant: variantProp,
                  })?.color
                }
              />
            ))}
          <Text style={[styles?.title, props?.titleStyle]}>{props?.title}</Text>
          {props?.rightIcon ??
            (props?.rightIconName && (
              <MaterialCommunityIcons
                name={props?.rightIconName}
                size={props?.rightIconSize ?? responsive?.size(21)}
                color={
                  props?.rightIconColor ??
                  getChipColor({
                    colors,
                    theme: themeProp,
                    variant: variantProp,
                  })?.color
                }
              />
            ))}
        </RNView>
      </ShadowEffect>
    </Fragment>
  );
}

interface CustomMakeStyles extends MakeStyles {
  theme: ChipTheme;
  variant: ChipVariant;
}

function makeStyles({ colors, theme, variant }: CustomMakeStyles) {
  const chipColor = getChipColor({ colors, theme, variant });

  const styles = RNStyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: chipColor?.backgroundColor,
      columnGap: responsive?.size(8),
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: responsive?.size(15),
      paddingVertical: responsive?.height(5),
    },
    title: {
      color: chipColor?.color,
      fontSize: responsive?.size(14),
    },
  });

  return styles;
}

export type { ChipProps };
export { Chip };
