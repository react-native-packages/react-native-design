import type { ThemeColors } from '../themes';

type ThemeMode = 'dark' | 'light' | 'system';
interface MakeStyles {
  colors: ThemeColors;
  isError?: boolean;
  isDisabled?: boolean;
}

type ChipVariant = 'contained' | 'outlined' | 'text';
type ChipTheme = 'error' | 'success' | 'warn' | 'info' | 'default';
type Shape = 'rect' | 'rect-sharp' | 'round';
type ChipShape = Shape;
type AvatarShape = Shape | 'circle';

export type {
  ThemeMode,
  MakeStyles,
  ChipVariant,
  ChipTheme,
  Shape,
  ChipShape,
  AvatarShape,
};
