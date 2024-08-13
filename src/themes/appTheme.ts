import { themes } from './themes';

import type { ThemeColors, ThemeColorsPartial } from './themes';

interface AppTheme {
  light: ThemeColors;
  dark: ThemeColors;
}

interface AppThemePartial {
  light?: ThemeColorsPartial;
  dark?: ThemeColorsPartial;
}

const appTheme: AppTheme = themes;

export type { AppTheme, AppThemePartial };
export { appTheme };
