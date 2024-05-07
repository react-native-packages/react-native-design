import React, { type PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { ViewStyle, ColorValue, StyleProp } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsive } from '../helpers';
import { colors } from '../themes/appColors';

interface IconButtonProps {
  name?: string;
  size?: number;
  color?: number | ColorValue;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
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
    <TouchableOpacity
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
    </TouchableOpacity>
  );
}

const iconButtonStyles = StyleSheet.create({
  container: {
    padding: responsive.size(5),
  },
});

export type { IconButtonProps };
export { IconButton, iconButtonStyles };
