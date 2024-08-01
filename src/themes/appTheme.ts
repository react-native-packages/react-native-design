import { themes } from './themes';

import type { ThemeColors } from './themes';

interface AppTheme {
  light: ThemeColors;
  dark: ThemeColors;
}

const appTheme: AppTheme = themes;

export type { AppTheme };
export { appTheme };
