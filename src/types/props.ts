import type { Attributes } from 'react';
import type { AccessibilityProps } from 'react-native';

interface TestProps {
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
}

interface BaseProps extends AccessibilityProps, TestProps, Attributes {}

type SpinnerSize = 'small' | 'large';

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonThemeVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonShapeVariant = 'rect-sharp' | 'rect' | 'round';

type ButtonLoadingPosition = 'left' | 'right';

type ModalAnimationType = 'fade' | 'none' | 'slide';

type DividerOrientation = 'horizontal' | 'vertical';

type InputVariant = 'base' | 'border' | 'noborder';
type InputShape = 'rect' | 'rect-sharp' | 'round';

type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Orientation = 'horizontal' | 'vertical';

type WaveCircleMotion = 'outside' | 'inside';

type AvatarSize =
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large';

export type {
  TestProps,
  SpinnerSize,
  ButtonVariant,
  ButtonThemeVariant,
  ButtonShapeVariant,
  ButtonLoadingPosition,
  ModalAnimationType,
  DividerOrientation,
  BaseProps,
  InputVariant,
  InputShape,
  BadgePosition,
  Orientation,
  WaveCircleMotion,
  AvatarSize,
};
