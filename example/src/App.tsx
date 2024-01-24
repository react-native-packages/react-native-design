import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-design';
import { responsiveSize } from 'react-native-responsive-helper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="text" variant="text" numberOfLines={1} style={styles?.text}>
        text
      </Text>
      <Text
        testID="buttonText"
        variant="button"
        numberOfLines={1}
        style={styles?.text}
      >
        Button text
      </Text>
      <Text
        testID="errorText"
        variant="error"
        numberOfLines={1}
        style={styles?.text}
      >
        Error text
      </Text>
      <Text
        testID="labelText"
        variant="label"
        numberOfLines={1}
        style={styles?.text}
      >
        Label text
      </Text>
      <Text
        testID="titleText"
        variant="title"
        numberOfLines={1}
        style={styles?.text}
      >
        Title text
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: responsiveSize(21),
  },
});
