import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  View as RNView,
  StyleSheet as RNStyleSheet,
  Pressable as RNPressable,
} from 'react-native';
import type {
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { responsive } from '../helpers';
import { colors } from '../themes/appColors';
import type { BaseProps } from '../types';

interface CardProps extends BaseProps {
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
}

function Card(props: PropsWithChildren<CardProps>) {
  function onPress() {
    if (props?.onPress) {
      props?.onPress();
    }
  }

  return (
    <React.Fragment>
      <RNPressable
        testID={`${props?.testID}.container`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.container`}
        disabled={props?.disabled}
        onPress={onPress}
        style={props?.containerStyle}
      >
        <RNView
          testID={`${props?.testID}.content`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.content`}
          style={[styles?.content, styles?.boxShadow, props?.contentStyle]}
        >
          {props?.children}
        </RNView>
      </RNPressable>
    </React.Fragment>
  );
}

const styles = RNStyleSheet.create({
  content: {
    backgroundColor: colors?.white?.normal?.main,
    elevation: 5,
    paddingHorizontal: responsive.size(10),
    paddingVertical: responsive.height(15),
    rowGap: responsive.height(15),
    width: '100%',
  },
  boxShadow: {
    shadowColor: colors?.black?.normal?.main,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export type { CardProps };
export { Card };
