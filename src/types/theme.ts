import type { ThemeColors } from '../themes';

type ThemeMode = 'dark' | 'light' | 'system';
interface MakeStyles {
  colors: ThemeColors;
  isError?: boolean;
  isDisabled?: boolean;
}

export type { ThemeMode, MakeStyles };
