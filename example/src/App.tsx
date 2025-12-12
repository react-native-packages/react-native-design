import { View, StyleSheet } from 'react-native';
// import { ReactNativeDesignView } from 'react-native-design';
import StorybookUI from '../.storybook';

export default StorybookUI;

export function App() {
  return (
    <View style={styles.container}>
      {/* <ReactNativeDesignView color="#32a852" style={styles.box} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
