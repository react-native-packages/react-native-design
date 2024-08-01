import React from 'react';
import type { PropsWithChildren } from 'react';
import { AutocompleteDropdownContextProvider as RNAutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

import type { BaseProps } from '../types';
import { AppThemeProvider } from '../contexts';
import type { AppTheme } from '../themes';

interface DesignProviderProps extends BaseProps {
  theme?: AppTheme;
}

function DesignProvider(props: PropsWithChildren<DesignProviderProps>) {
  return (
    <AppThemeProvider theme={props?.theme}>
      <RNAutocompleteDropdownContextProvider {...props}>
        {props?.children}
      </RNAutocompleteDropdownContextProvider>
    </AppThemeProvider>
  );
}

export type { DesignProviderProps };
export { DesignProvider };
