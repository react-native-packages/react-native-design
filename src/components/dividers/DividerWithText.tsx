import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import type { TestProps } from '../../types/props';
import { Divider } from './Divider';
import { Text } from '../Text';
import { responsive } from '../../helpers';

interface DividerWithTextProps extends TestProps {
  text: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  startDividerStyle?: StyleProp<ViewStyle>;
  endDividerStyle?: StyleProp<ViewStyle>;
}

function DividerWithText(props: DividerWithTextProps) {
  return (
    <View
      testID={`${props?.testID}.container`}
      accessible={props?.accessible}
      accessibilityLabel={`${props?.accessibilityLabel}.container`}
      style={[styles?.container, props?.containerStyle]}
    >
      <Divider
        testID={`${props?.testID}.divider.start`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.divider.start`}
        lineStyle={[styles?.dividerLine, props?.startDividerStyle]}
      />
      <Text
        testID={`${props?.testID}.text`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.text`}
        style={[styles?.text, props?.textStyle]}
      >
        {props?.text}
      </Text>
      <Divider
        testID={`${props?.testID}.divider.end`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.divider.end`}
        lineStyle={[styles?.dividerLine, props?.endDividerStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    columnGap: responsive.size(10),
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
  },
  dividerLine: {
    flexGrow: 1,
  },
});

export type { DividerWithTextProps };
export { DividerWithText };
