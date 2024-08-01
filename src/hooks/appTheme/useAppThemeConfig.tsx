import { useEffect, useState } from 'react';
import { storage } from '@rnpack/utils';

import { appTheme } from '../../themes';
import { storageKeys } from '../../constants';

import type { AppTheme, ThemeColors } from '../../themes';
import type { ThemeMode } from '../../types';

interface UseAppThemeConfigReturns {
  colors: ThemeColors;
  mode: ThemeMode;
  changeAppTheme: (mode: ThemeMode) => void;
}

interface UseAppThemeConfigProps {
  theme?: AppTheme;
}

function useAppThemeConfig(
  props?: UseAppThemeConfigProps
): UseAppThemeConfigReturns {
  const [colors, setColors] = useState<ThemeColors>(
    props?.theme?.light ?? appTheme?.light
  );
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    mount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function mount() {
    const theme: ThemeMode = await getThemeMode();

    changeAppTheme(theme);
  }

  async function setThemeMode(_mode: ThemeMode): Promise<void> {
    await storage?.set({
      key: storageKeys?.themes?.APP_THEME_MODE_KEY,
      value: _mode,
    });
  }

  async function getThemeMode(): Promise<ThemeMode> {
    const theme: ThemeMode = await storage?.get({
      key: storageKeys?.themes?.APP_THEME_MODE_KEY,
    });

    return theme ?? 'light';
  }

  function changeAppTheme(_mode: ThemeMode) {
    setThemeMode(_mode);

    setMode(_mode);

    if (_mode === 'dark') {
      setColors(props?.theme?.dark ?? appTheme?.dark);
    }

    if (_mode === 'light') {
      setColors(props?.theme?.light ?? appTheme?.light);
    }

    if (_mode === 'system') {
      setColors(props?.theme?.light ?? appTheme?.light);
    }
  }

  return { colors, mode, changeAppTheme };
}

export type { UseAppThemeConfigReturns };
export { useAppThemeConfig };
