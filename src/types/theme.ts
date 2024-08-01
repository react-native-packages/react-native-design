import type { ThemeColors } from '../themes';

type ThemeMode = 'dark' | 'light' | 'system';
interface MakeStyles {
  colors: ThemeColors;
}

export type { ThemeMode, MakeStyles };
