import React from 'react';
import { StyleSheet, View } from 'react-native';
import type {
  StyleProp,
  TextStyle as RNTextStyle,
  ViewStyle,
} from 'react-native';

import { Text } from './Text';
import { responsive } from '../helpers';

interface EmptySearchResultProps {
  text?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<RNTextStyle>;
}
function EmptySearchResult(props: EmptySearchResultProps) {
  return (
    <View style={[styles?.container, props?.containerStyle]}>
      <Text style={[styles?.text, props?.textStyle]}>
        {props.text || 'Nothing found'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
