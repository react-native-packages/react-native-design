import React from 'react';
import type { ReactElement, MutableRefObject } from 'react';
import { Dimensions as RNDimensions } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
  TextInputProps as RNTextInputProps,
  ColorValue as RNColorValue,
  NativeSyntheticEvent as RNNativeSyntheticEvent,
  TextInputSubmitEditingEventData as RNTextInputSubmitEditingEventData,
  TextInputFocusEventData as RNTextInputFocusEventData,
} from 'react-native';
import { AutocompleteDropdown as RNAutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import type {
  AutocompleteDropdownRef as RNAutocompleteDropdownRef,
  TAutocompleteDropdownItem as TRNAutocompleteDropdownItem,
  AutocompleteDropdownProps as RNAutocompleteDropdownProps,
} from 'react-native-autocomplete-dropdown';
import { mergeObjects } from '@rnpack/utils';

import type { BaseProps } from '../types';
import type { TextInputProps } from './TextInput';
import { FormField } from './FormField';
import { EmptySearchResult } from './EmptySearchResult';
import { responsive } from '../helpers';
import { colors } from '../themes';
import { Feather } from './icons';

interface AutocompleteDropdownProps extends BaseProps {
  dataSet?: Pick<RNAutocompleteDropdownProps, 'dataSet'>['dataSet'];
  containerStyle?: RNStyleProp<RNViewStyle>;
  label?: string;
  labelStyle?: RNStyleProp<RNTextStyle>;
  touched?: boolean;
  error?: string;
  errorStyle?: RNStyleProp<RNTextStyle>;
  placeholder?: string;
  placeholderStyle?: RNStyleProp<RNTextStyle>;
  placeholderTextColor?: RNColorValue;
  initialValue?: string | object;
  rightButtonsContainerStyle?: RNStyleProp<RNViewStyle>;
  inputContainerStyle?: RNStyleProp<RNViewStyle>;
  suggestionsListContainerStyle?: RNStyleProp<RNViewStyle>;
  autocompleteContainerStyle?: RNStyleProp<RNViewStyle>;
  chevronIconComponent?: ReactElement;
  clearIconComponent?: ReactElement;
  renderItem?: Pick<RNAutocompleteDropdownProps, 'renderItem'>['renderItem'];
  emptyResultComponent?: ReactElement;
  suggestionsListTextStyle?: RNStyleProp<RNTextStyle>;
  emptyResultText?: string;
  onChangeText?: (text: string) => void;
  onSelectItem?: (item: TRNAutocompleteDropdownItem) => void;
  onClearPress?: () => void;
  onSubmitSearch?: (
    e: RNNativeSyntheticEvent<RNTextInputSubmitEditingEventData>
  ) => void;
  onOpenSuggestionsList?: (isOpened: boolean) => void;
  onBlur?: (e: RNNativeSyntheticEvent<RNTextInputFocusEventData>) => void;
  showChevron?: boolean;
  closeOnBlur?: boolean;
  clearOnFocus?: boolean;
  showClear?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: Pick<TextInputProps, 'autoCapitalize'>['autoCapitalize'];
  isLoading?: boolean;
  useFilter?: boolean;
  dropdownControllerRef?: MutableRefObject<
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
        suggestionsListMaxHeight={RNDimensions.get('window').height * 0.4}
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
          ) as RNStyleProp<RNTextStyle>,
          ...props?.textInputProps,
        }}
        renderItem={props?.renderItem}
        rightButtonsContainerStyle={props?.rightButtonsContainerStyle}
        inputContainerStyle={
          mergeObjects(
            {
              backgroundColor: props?.isDisabled
                ? colors?.grey?.normal?.main
                : colors?.grey?.light?.shade100,
              opacity: props?.isDisabled ? 0.4 : 1,
              padding: responsive.size(8),
              borderRadius: 4,
            },
            props?.inputContainerStyle
          ) as RNStyleProp<RNViewStyle>
        }
        suggestionsListContainerStyle={
          mergeObjects(
            {
              backgroundColor: colors?.white?.normal?.main,
            },
            props?.suggestionsListContainerStyle
          ) as RNStyleProp<RNViewStyle>
        }
        suggestionsListTextStyle={props?.suggestionsListTextStyle}
        containerStyle={
          mergeObjects(
            { flexGrow: 1, flexShrink: 1 },
            props?.autocompleteContainerStyle
          ) as RNStyleProp<RNViewStyle>
        }
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
