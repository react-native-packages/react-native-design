import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { responsive } from '../helpers';
import { colors } from '../themes/appColors';
import type { TestProps } from '../types/props';

interface CardProps extends TestProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
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
      <Pressable
        testID={`${props?.testID}.container`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.container`}
        disabled={props?.disabled}
        onPress={onPress}
        style={props?.containerStyle}
      >
        <View
          testID={`${props?.testID}.content`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.content`}
          style={[styles?.content, styles?.boxShadow, props?.contentStyle]}
        >
          {props?.children}
        </View>
      </Pressable>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
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
