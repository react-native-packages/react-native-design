import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet as RNStyleSheet,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';
import type {
  ViewStyle as RNViewStyle,
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { responsive } from '../helpers';
import { colors } from '../themes/appColors';
import type { BaseProps } from '../types';

interface IconButtonProps extends BaseProps {
  name?: string;
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
      style={[iconButtonStyles?.container, props?.containerStyle]}
      disabled={props?.disabled}
    >
      {props?.children ??
        (props?.name && (
          <MaterialCommunityIcons
            name={props?.name}
            size={props?.size ?? 24}
            color={
              props?.disabled
                ? colors?.grey?.light?.main
                : props?.color ?? colors?.grey?.granite?.main
            }
          />
        ))}
    </RNTouchableOpacity>
  );
}

const iconButtonStyles = RNStyleSheet.create({
  container: {
    padding: responsive.size(5),
  },
});

export type { IconButtonProps };
export { IconButton, iconButtonStyles };
