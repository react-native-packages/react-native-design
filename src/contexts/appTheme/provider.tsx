import React from 'react';

import type { PropsWithChildren } from 'react';

import { AppThemeContext } from './context';
import { useAppThemeConfig } from '../../hooks/appTheme/useAppThemeConfig';

import type { AppTheme } from '../../themes';

const { Provider } = AppThemeContext;

interface AppThemeProviderProps {
  theme?: AppTheme;
}

function AppThemeProvider(props: PropsWithChildren<AppThemeProviderProps>) {
  const { colors, mode, changeAppTheme } = useAppThemeConfig({
    theme: props?.theme,
  });

  return (
    <Provider
      value={{
        colors,
        mode,
        changeAppTheme,
      }}
    >
      {props?.children}
    </Provider>
  );
}

export type { AppThemeProviderProps };
export { AppThemeProvider };
