import type { ThemeColors } from '../themes';
import type { ThemeMode } from './theme';

interface AppThemeContextType {
  colors: ThemeColors;
  mode: ThemeMode;
  changeAppTheme: (mode: ThemeMode) => void;
}

export type { AppThemeContextType };
