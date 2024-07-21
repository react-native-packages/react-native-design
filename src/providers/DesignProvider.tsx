import React from 'react';
import type { PropsWithChildren } from 'react';
import { AutocompleteDropdownContextProvider as RNAutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

import type { BaseProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DesignProviderProps extends BaseProps {}

function DesignProvider(props: PropsWithChildren<DesignProviderProps>) {
  return (
    <RNAutocompleteDropdownContextProvider {...props}>
      {props?.children}
    </RNAutocompleteDropdownContextProvider>
  );
}

export type { DesignProviderProps };
export { DesignProvider };
