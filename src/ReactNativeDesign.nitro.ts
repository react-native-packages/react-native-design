import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules';

export interface ReactNativeDesignProps extends HybridViewProps {
  color: string;
}
export interface ReactNativeDesignMethods extends HybridViewMethods {}

export type ReactNativeDesign = HybridView<
  ReactNativeDesignProps,
  ReactNativeDesignMethods
>;
