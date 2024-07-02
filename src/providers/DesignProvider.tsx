import React from 'react';
import type { PropsWithChildren } from 'react';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DesignProviderProps {}

function DesignProvider(props: PropsWithChildren<DesignProviderProps>) {
  return (
    <AutocompleteDropdownContextProvider>
      {props?.children}
    </AutocompleteDropdownContextProvider>
  );
}

export type { DesignProviderProps };
export { DesignProvider };
