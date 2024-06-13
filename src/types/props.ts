interface TestProps {
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
}

type SpinnerSize = 'small' | 'large';

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonLoadingPosition = 'left' | 'right';

type ModalAnimationType = 'fade' | 'none' | 'slide';

type DividerOrientation = 'horizontal' | 'vertical';

export type {
  TestProps,
  SpinnerSize,
  ButtonVariant,
  ButtonLoadingPosition,
  ModalAnimationType,
  DividerOrientation,
};