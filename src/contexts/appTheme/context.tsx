import { createContext } from 'react';

import type { Context } from 'react';

import { appTheme } from '../../themes';

import type { AppThemeContextType } from '../../types';

const defaultValue: AppThemeContextType = {
  colors: appTheme?.light,
  mode: 'light',
  changeAppTheme: () => {
    console.info('Change theme function default value!');
  },
};

const AppThemeContext: Context<AppThemeContextType> =
  createContext<AppThemeContextType>(defaultValue);

export { AppThemeContext };
