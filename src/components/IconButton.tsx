import React from 'react';
import {
  StyleSheet as RNStyleSheet,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import type { PropsWithChildren } from 'react';
import type {
  ViewStyle as RNViewStyle,
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
} from 'react-native';

import { responsive } from '../helpers';
import { useAppTheme } from '../hooks';

import type { BaseProps, MakeStyles } from '../types';
import type { MaterialCommunityIconName } from './icons';

interface IconButtonProps extends BaseProps {
  name?: MaterialCommunityIconName;
  size?: number;
  color?: number | RNColorValue;
  onPress?: () => void;
  containerStyle?: RNStyleProp<RNViewStyle>;
  disabled?: boolean;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
}

function IconButton(props: PropsWithChildren<IconButtonProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  function onPress() {
    if (props?.onPress) {
      props?.onPress();
    }
  }

  return (
    <RNTouchableOpacity
      {...props}
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      onPress={onPress}
      style={[styles?.container, props?.containerStyle]}
      disabled={props?.disabled}
    >
      {props?.children ??
        (props?.name && (
          <MaterialCommunityIcons
            name={props?.name}
            size={props?.size ?? 24}
            color={
              props?.disabled
                ? colors?.onSurfaceDisabled
                : props?.color ?? colors?.onSurface
            }
          />
        ))}
    </RNTouchableOpacity>
  );
}

function makeStyles({ colors: _colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      padding: responsive.size(5),
    },
  });

  return styles;
}

export type { IconButtonProps };
export { IconButton };
