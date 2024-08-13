import type { ThemeColors } from '../themes';

type ThemeMode = 'dark' | 'light' | 'system';
interface MakeStyles {
  colors: ThemeColors;
  isError?: boolean;
  isDisabled?: boolean;
}

type ChipVariant = 'contained' | 'outlined' | 'text';
type ChipTheme = 'error' | 'success' | 'warn' | 'info' | 'default';
type ChipShape = 'rect' | 'rect-sharp' | 'round';

export type { ThemeMode, MakeStyles, ChipVariant, ChipTheme, ChipShape };
