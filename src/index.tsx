import { getHostComponent } from 'react-native-nitro-modules';
const ReactNativeDesignConfig = require('../nitrogen/generated/shared/json/ReactNativeDesignConfig.json');
import type {
  ReactNativeDesignMethods,
  ReactNativeDesignProps,
} from './ReactNativeDesign.nitro';

export const ReactNativeDesignView = getHostComponent<
  ReactNativeDesignProps,
  ReactNativeDesignMethods
>('ReactNativeDesign', () => ReactNativeDesignConfig);

export * from './components';
export * from './constants';
export * from './contexts';
export * from './hooks';
export * from './providers';
export * from './themes';
export * from './types';
export * from './utils';
export * from './animations';
