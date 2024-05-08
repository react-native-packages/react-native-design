interface TestProps {
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
}

type ButtonVariant = 'contained' | 'outlined' | 'text';

type SpinnerSize = 'small' | 'large';

type ButtonLoadingPosition = 'left' | 'right';

export type { TestProps, SpinnerSize, ButtonVariant, ButtonLoadingPosition };
