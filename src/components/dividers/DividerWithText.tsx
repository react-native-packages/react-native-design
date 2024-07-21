import React from 'react';
import { StyleSheet as RNStyleSheet, View as RNView } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import type { BaseProps } from '../../types';
import { Divider } from './Divider';
import { Text } from '../Text';
import { responsive } from '../../helpers';

interface DividerWithTextProps extends BaseProps {
  text: React.ReactNode;
  containerStyle?: RNStyleProp<RNViewStyle>;
  textStyle?: RNStyleProp<RNTextStyle>;
  startDividerStyle?: RNStyleProp<RNViewStyle>;
  endDividerStyle?: RNStyleProp<RNViewStyle>;
}

function DividerWithText(props: DividerWithTextProps) {
  return (
    <RNView
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
    </RNView>
  );
}

const styles = RNStyleSheet.create({
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
