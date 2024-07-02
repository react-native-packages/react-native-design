import React from 'react';
import type { PropsWithChildren } from 'react';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

function ReactNativeProvider(props: PropsWithChildren<Record<string, never>>) {
  return (
    <AutocompleteDropdownContextProvider>
      {props?.children}
    </AutocompleteDropdownContextProvider>
  );
}

export { ReactNativeProvider };
