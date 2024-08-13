import React from 'react';
import { AutocompleteDropdownContextProvider as RNAutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

import type { PropsWithChildren } from 'react';

import { AppThemeProvider } from '../contexts';

import type { BaseProps } from '../types';
import type { AppThemePartial } from '../themes';

interface DesignProviderProps extends BaseProps {
  theme?: AppThemePartial;
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
