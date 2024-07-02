import React from 'react';
import type { ReactElement } from 'react';
import { Dimensions } from 'react-native';
import type {
  StyleProp,
  ViewStyle,
  TextStyle as RNTextStyle,
  TextInputProps as RNTextInputProps,
  ColorValue,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TextInputFocusEventData,
} from 'react-native';
import { AutocompleteDropdown as RNAutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import type {
  AutocompleteDropdownRef as RNAutocompleteDropdownRef,
  TAutocompleteDropdownItem,
  AutocompleteDropdownProps as RNAutocompleteDropdownProps,
} from 'react-native-autocomplete-dropdown';

import type { TestProps } from '../types';
import type { TextInputProps } from './TextInput';
import { FormField } from './FormField';
import { EmptySearchResult } from './EmptySearchResult';
import { mergeObjects } from '../utils/operation';
import { responsive } from '../helpers';
import { colors } from '../themes';
import { Feather } from './icons';

interface AutocompleteDropdownProps extends TestProps {
  dataSet?: Pick<RNAutocompleteDropdownProps, 'dataSet'>['dataSet'];
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<RNTextStyle>;
  touched?: boolean;
  error?: string;
  errorStyle?: StyleProp<RNTextStyle>;
  placeholder?: string;
  placeholderStyle?: StyleProp<RNTextStyle>;
  placeholderTextColor?: ColorValue;
  initialValue?: string | object;
  rightButtonsContainerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  suggestionsListContainerStyle?: StyleProp<ViewStyle>;
  autocompleteContainerStyle?: StyleProp<ViewStyle>;
  chevronIconComponent?: ReactElement;
  clearIconComponent?: ReactElement;
  renderItem?: Pick<RNAutocompleteDropdownProps, 'renderItem'>['renderItem'];
  emptyResultComponent?: ReactElement;
  suggestionsListTextStyle?: StyleProp<RNTextStyle>;
  emptyResultText?: string;
  onChangeText?: (text: string) => void;
  onSelectItem?: (item: TAutocompleteDropdownItem) => void;
  onClearPress?: () => void;
  onSubmitSearch?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  onOpenSuggestionsList?: (isOpened: boolean) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  showChevron?: boolean;
  closeOnBlur?: boolean;
  clearOnFocus?: boolean;
  showClear?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: Pick<TextInputProps, 'autoCapitalize'>['autoCapitalize'];
  isLoading?: boolean;
  useFilter?: boolean;
  dropdownControllerRef?: React.MutableRefObject<
    RNAutocompleteDropdownRef | undefined
  >;
  textInputProps?: RNTextInputProps;
  isDisabled?: boolean;
}

function AutocompleteDropdown(props: AutocompleteDropdownProps) {
  return (
    <FormField
      label={props?.label}
      labelStyle={props?.labelStyle}
      touched={props?.touched}
      error={props?.error}
      errorStyle={props?.errorStyle}
      containerStyle={props?.containerStyle}
    >
      <RNAutocompleteDropdown
        controller={(controller) => {
          if (props?.dropdownControllerRef) {
            props.dropdownControllerRef.current = controller;
          }
        }}
        initialValue={props?.initialValue}
        dataSet={props?.dataSet}
        onChangeText={props?.onChangeText}
        onSelectItem={props?.onSelectItem}
        debounce={600}
        suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
        onClear={props?.onClearPress}
        onSubmit={props?.onSubmitSearch}
        onOpenSuggestionsList={props?.onOpenSuggestionsList}
        loading={props?.isLoading}
        useFilter={props?.useFilter ?? false} // set false to prevent rerender twice
        textInputProps={{
          placeholder: props?.placeholder,
          autoCorrect: props?.autoCorrect ?? false,
          autoCapitalize: props?.autoCapitalize ?? 'none',
          placeholderTextColor: props?.placeholderTextColor ?? '#454545',
          style: mergeObjects(
            {
              fontSize: responsive.size(14),
              color: colors?.black?.normal?.main,
            },
            props?.placeholderStyle
          ),
          ...props?.textInputProps,
        }}
        renderItem={props?.renderItem}
        rightButtonsContainerStyle={props?.rightButtonsContainerStyle}
        inputContainerStyle={mergeObjects(
          {
            backgroundColor: props?.isDisabled
              ? colors?.grey?.normal?.main
              : '#ECECEC',
            opacity: props?.isDisabled ? 0.4 : 1,
            padding: responsive.size(8),
            borderRadius: 4,
          },
          props?.inputContainerStyle
        )}
        suggestionsListContainerStyle={mergeObjects(
          {
            backgroundColor: '#FFFFFF',
            // color: appColors?.common?.black,
          },
          props?.suggestionsListContainerStyle
        )}
        suggestionsListTextStyle={mergeObjects(
          {
            // color: appColors?.common?.black,
          },
          props?.suggestionsListTextStyle
        )}
        containerStyle={mergeObjects(
          { flexGrow: 1, flexShrink: 1 },
          props?.autocompleteContainerStyle
        )}
        ChevronIconComponent={
          props?.chevronIconComponent ?? (
            <Feather name="chevron-down" size={20} color="#000000" />
          )
        }
        ClearIconComponent={
          props?.clearIconComponent ?? (
            <Feather name="x-circle" size={25} color="#000000" />
          )
        }
        showChevron={props?.showChevron ?? true}
        closeOnBlur={props?.closeOnBlur ?? false}
        clearOnFocus={props?.clearOnFocus ?? false}
        showClear={props?.showClear ?? false}
        onBlur={props?.onBlur}
        EmptyResultComponent={
          props?.emptyResultComponent ?? (
            <EmptySearchResult text={props?.emptyResultText} />
          )
        }
        emptyResultText={props?.emptyResultText}
      />
    </FormField>
  );
}

export type { AutocompleteDropdownProps };
export { AutocompleteDropdown };
