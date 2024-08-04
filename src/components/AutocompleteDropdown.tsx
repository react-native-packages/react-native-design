import React from 'react';
import { Dimensions as RNDimensions, StyleSheet } from 'react-native';
import { mergeObjects, responsive } from '@rnpack/utils';
import { AutocompleteDropdown as RNAutocompleteDropdown } from 'react-native-autocomplete-dropdown';

import type { ReactElement, MutableRefObject } from 'react';
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
import type {
  AutocompleteDropdownRef as RNAutocompleteDropdownRef,
  TAutocompleteDropdownItem as TRNAutocompleteDropdownItem,
  AutocompleteDropdownProps as RNAutocompleteDropdownProps,
} from 'react-native-autocomplete-dropdown';

import { FormField } from './FormField';
import { EmptySearchResult } from './EmptySearchResult';
import { Feather } from './icons';
import { useAppTheme } from '../hooks';

import type { BaseProps, MakeStyles } from '../types';
import type { TextInputProps } from './TextInput';

interface AutocompleteDropdownProps extends BaseProps {
  dataSet?: Pick<RNAutocompleteDropdownProps, 'dataSet'>['dataSet'];
  containerStyle?: RNStyleProp<RNViewStyle>;
  label?: string;
  labelStyle?: RNStyleProp<RNTextStyle>;
  touched?: boolean;
  error?: string;
  errorStyle?: RNStyleProp<RNTextStyle>;
  placeholder?: string;
  textInputStyle?: RNStyleProp<RNTextStyle>;
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
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors, isDisabled: props?.isDisabled });

  return (
    <FormField
      label={props?.label}
      labelStyle={[props?.labelStyle, styles?.label]}
      touched={props?.touched}
      error={props?.error}
      errorStyle={[styles?.error, props?.errorStyle]}
      containerStyle={[styles?.container, props?.containerStyle]}
      contentStyle={[styles?.content]}
      isDisabled={props?.isDisabled}
      variant="border"
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
          placeholderTextColor:
            props?.placeholderTextColor ?? colors?.onSurfaceDisabled,
          style: mergeObjects(
            styles?.textInput,
            props?.textInputStyle
          ) as RNStyleProp<RNTextStyle>,
          ...props?.textInputProps,
        }}
        renderItem={props?.renderItem}
        rightButtonsContainerStyle={[
          styles?.rightButtonsContainer,
          props?.rightButtonsContainerStyle,
        ]}
        inputContainerStyle={
          mergeObjects(
            styles?.inputContainer,
            props?.inputContainerStyle
          ) as RNStyleProp<RNViewStyle>
        }
        suggestionsListContainerStyle={
          mergeObjects(
            styles?.suggestionsListContainer,
            props?.suggestionsListContainerStyle
          ) as RNStyleProp<RNViewStyle>
        }
        suggestionsListTextStyle={
          mergeObjects(
            styles?.suggestionsListText,
            props?.suggestionsListTextStyle
          ) as RNStyleProp<RNTextStyle>
        }
        containerStyle={
          mergeObjects(
            styles?.autocompleteContainer,
            props?.autocompleteContainerStyle
          ) as RNStyleProp<RNViewStyle>
        }
        ChevronIconComponent={
          props?.chevronIconComponent ?? (
            <Feather name="chevron-down" size={20} />
          )
        }
        ClearIconComponent={
          props?.clearIconComponent ?? <Feather name="x-circle" size={25} />
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

function makeStyles({ colors, isDisabled }: MakeStyles) {
  const styles = StyleSheet.create({
    label: {},
    textInput: {
      color: colors?.onSurface,
      fontSize: responsive.size(14),
    },
    container: {},
    content: {
      paddingHorizontal: 0,
    },
    error: {},
    rightButtonsContainer: {},
    inputContainer: {
      backgroundColor: isDisabled ? colors?.onSurfaceDisabled : colors?.surface,
      borderRadius: responsive.size(4),
      opacity: isDisabled ? 0.4 : 1,
      padding: responsive.size(8),
    },
    suggestionsListContainer: { backgroundColor: colors?.inverseOnSurface },
    autocompleteContainer: { flexGrow: 1, flexShrink: 1 },
    suggestionsListText: {
      color: colors?.onSurface,
    },
  });

  return styles;
}

export type { AutocompleteDropdownProps };
export { AutocompleteDropdown };
