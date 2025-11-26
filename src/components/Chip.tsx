import { StyleSheet as RNStyleSheet } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { ReactNode } from 'react';
import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { getChipColor, getChipShape, getChipStyle } from '../utils';
import { useAppTheme } from '../hooks';
import { Text } from './Text';
import { IconButton } from './IconButton';

import type { IconButtonProps } from './IconButton';
import type { MaterialCommunityIconName } from './icons';
import type { TextProps } from './Text';
import type {
  ChipShape,
  ChipTheme,
  BaseProps,
  MakeStyles,
  ChipVariant,
  IconStateCallbackType,
} from '../types';
import { Pressable } from './Pressable';

interface ChipProps extends BaseProps {
  title: string;
  variant?: ChipVariant;
  theme?: ChipTheme;
  shape?: ChipShape;
  onPress?: () => void;
  leftIconName?: MaterialCommunityIconName;
  leftIcon?: ReactNode | ((args: IconStateCallbackType) => ReactNode);
  leftIconSize?: number;
  leftIconColor?: RNColorValue;
  onPressLeftIcon?: () => void;
  leftIconButtonProps?: IconButtonProps;
  rightIconName?: MaterialCommunityIconName;
  rightIcon?: ReactNode | ((args: IconStateCallbackType) => ReactNode);
  rightIconSize?: number;
  rightIconColor?: RNColorValue;
  onPressRightIcon?: () => void;
  rightIconButtonProps?: IconButtonProps;
  titleProps?: TextProps;
  numberOfLines?: number;
  titleStyle?: RNStyleProp<RNTextStyle>;
  containerStyle?: RNStyleProp<RNViewStyle>;
  leftIconButtonContainerStyle?: RNStyleProp<RNViewStyle>;
  rightIconButtonContainerStyle?: RNStyleProp<RNViewStyle>;
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
    <Pressable
      onPress={props?.onPress}
      style={[
        styles?.container,
        getChipShape(shapeProp),
        getChipStyle({ colors, theme: themeProp, variant: variantProp }),
        props?.containerStyle,
      ]}
    >
      {typeof props?.leftIcon === 'function'
        ? props?.leftIcon({
            color: props?.leftIconColor,
            size: props?.leftIconSize,
          })
        : props?.leftIcon ??
          (props?.leftIconName && (
            <IconButton
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
              onPress={props?.onPressLeftIcon}
              containerStyle={[
                styles?.iconButtonContainer,
                props?.rightIconButtonContainerStyle,
              ]}
              {...props?.leftIconButtonProps}
            />
          ))}
      <Text
        style={[styles?.title, props?.titleStyle]}
        numberOfLines={props?.numberOfLines}
        {...props?.titleProps}
      >
        {props?.title}
      </Text>
      {typeof props?.rightIcon === 'function'
        ? props?.rightIcon({
            color: props?.rightIconColor,
            size: props?.rightIconSize,
          })
        : props?.rightIcon ??
          (props?.rightIconName && (
            <IconButton
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
              onPress={props?.onPressRightIcon}
              containerStyle={[
                styles?.iconButtonContainer,
                props?.rightIconButtonContainerStyle,
              ]}
              {...props?.rightIconButtonProps}
            />
          ))}
    </Pressable>
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
      columnGap: responsive?.size(5),
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: responsive?.size(10),
      paddingVertical: responsive?.height(5),
    },
    title: {
      color: chipColor?.color,
      fontSize: responsive?.size(14),
    },
    iconButtonContainer: {
      padding: 0,
    },
  });

  return styles;
}

export type { ChipProps };
export { Chip };
