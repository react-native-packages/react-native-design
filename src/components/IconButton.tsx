import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { ViewStyle, ColorValue, StyleProp } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconButtonProps {
  icon?: React.ReactNode;
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

function IconButton(props: IconButtonProps) {
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
      {props?.icon}
      {props?.name && (
        <MaterialCommunityIcons
          name={props?.name}
          size={props?.size ?? 24}
          color={props?.disabled ? '#D3D3D3' : props?.color ?? '#676767'}
        />
      )}
    </TouchableOpacity>
  );
}

const iconButtonStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export type { IconButtonProps };
export { IconButton, iconButtonStyles };
