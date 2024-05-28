import React from 'react';
import type { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../themes/appColors';
import { responsive } from '../../helpers';
import type { DividerOrientation, TestProps } from '../../types/props';

interface DividerProps extends TestProps {
  lineStyle?: StyleProp<ViewStyle>;
  color?: ColorValue;
  orientation?: DividerOrientation;
}

function Divider(props: DividerProps) {
  return (
    <View
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      style={[
        styles?.[`${props?.orientation ?? 'horizontal'}`],
        {
          ...(!props?.orientation || props?.orientation === 'horizontal'
            ? { borderBottomColor: props?.color }
            : { backgroundColor: props?.color }),
        },
        props?.lineStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  /* eslint-disable react-native/no-unused-styles */
  horizontal: {
    borderBottomColor: colors?.black?.normal?.main,
    borderBottomWidth: responsive.size(1),
  },
  vertical: {
    backgroundColor: colors?.black?.normal?.main,
    height: '100%',
    width: 1,
  },
});

export type { DividerProps };
export { Divider };
