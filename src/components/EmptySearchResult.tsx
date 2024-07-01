import React from 'react';
import { View } from 'react-native';
import type {
  StyleProp,
  TextStyle as RNTextStyle,
  ViewStyle,
} from 'react-native';

import { Text } from './Text';

interface EmptySearchResultProps {
  text?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<RNTextStyle>;
}
function EmptySearchResult(props: EmptySearchResultProps) {
  return (
    <View style={props?.containerStyle}>
      <Text style={props?.textStyle}>{props.text || 'Nothing found'}</Text>
    </View>
  );
}

export type { EmptySearchResultProps };
export { EmptySearchResult };
