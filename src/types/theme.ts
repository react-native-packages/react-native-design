import type { ThemeColors } from '../themes';

type ThemeMode = 'dark' | 'light' | 'system';
interface MakeStyles {
  colors: ThemeColors;
  isError?: boolean;
  isDisabled?: boolean;
}

type ChipVariant = 'error' | 'success' | 'warn' | 'info' | 'default';
type ChipShape = 'rect' | 'rect-sharp' | 'round';

export type { ThemeMode, MakeStyles, ChipVariant, ChipShape };
