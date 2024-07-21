import React from 'react';
import { StyleSheet as RNStyleSheet, View as RNView } from 'react-native';
import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { colors } from '../../themes/appColors';
import { responsive } from '../../helpers';
import type { BaseProps, DividerOrientation } from '../../types';

interface DividerProps extends BaseProps {
  lineStyle?: RNStyleProp<RNViewStyle>;
  color?: RNColorValue;
  orientation?: DividerOrientation;
}

function Divider(props: DividerProps) {
  return (
    <RNView
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

const styles = RNStyleSheet.create({
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
