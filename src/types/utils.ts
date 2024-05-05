import type { ColorValue } from 'react-native';

interface ColorValues {
  [key: string]: {
    main: ColorValue;
    shadow?: ColorValue;
  };
}

interface Colors {
  [key: string]: ColorValues;
}

export type { ColorValues, Colors };
