import { useContext } from 'react';
import type { ThemeColors } from '../../themes';
import type { AppThemeContextType, ThemeMode } from '../../types';
import { AppThemeContext } from '../../contexts';

interface UseAppThemeReturns {
  colors: ThemeColors;
  mode: ThemeMode;
  changeAppTheme: (theme: ThemeMode) => void;
}

function useAppTheme(): UseAppThemeReturns {
  const { colors, mode, changeAppTheme } =
    useContext<AppThemeContextType>(AppThemeContext);

  return { colors, mode, changeAppTheme };
}

export type { UseAppThemeReturns };
export { useAppTheme };
