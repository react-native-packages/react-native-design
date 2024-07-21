import React from 'react';
import { StyleSheet as RNStyleSheet, View as RNView } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { Text } from './Text';
import { responsive } from '../helpers';
import type { BaseProps } from '../types';

interface EmptySearchResultProps extends BaseProps {
  text?: string;
  containerStyle?: RNStyleProp<RNViewStyle>;
  textStyle?: RNStyleProp<RNTextStyle>;
}
function EmptySearchResult(props: EmptySearchResultProps) {
  return (
    <RNView style={[styles?.container, props?.containerStyle]}>
      <Text style={[styles?.text, props?.textStyle]}>
        {props.text || 'Nothing found'}
      </Text>
    </RNView>
  );
}

const styles = RNStyleSheet.create({
  container: {
    paddingHorizontal: responsive.size(12),
    paddingVertical: responsive.height(12),
  },
  text: {
    fontSize: responsive.size(14),
  },
});

export type { EmptySearchResultProps };
export { EmptySearchResult };
