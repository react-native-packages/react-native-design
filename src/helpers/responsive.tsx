import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height: RNHeight } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < RNHeight ? [width, RNHeight] : [RNHeight, width];

// Default guideline sizes are based on standard ~5" screen mobile device (375*812)
// Dimentions -  for a global reference taking iphone 6/6s/7/8 (375*667)
// Also SSK XD design width is 375*812

const guidelineBaseWidth = 375;
let guidelineBaseHeight = 812;
if (Platform.OS === 'android') {
  const hgt = StatusBar.currentHeight;

  if (hgt !== undefined) {
    guidelineBaseHeight = guidelineBaseHeight + hgt;
  }
}

function height(value: number) {
  return (longDimension / guidelineBaseHeight) * value;
}

function size(value: number): number {
  return (shortDimension / guidelineBaseWidth) * value;
}

const responsive = { height, size };

export { responsive };
