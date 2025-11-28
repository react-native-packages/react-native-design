import {
  Dimensions as RNDimensions,
  StyleSheet as RNStyleSheet,
} from 'react-native';
import { mergeObjects, responsive } from '@rnpack/utils';
import { AutocompleteDropdown as RNAutocompleteDropdown } from 'react-native-autocomplete-dropdown';

import type { ReactElement, ReactNode, RefObject } from 'react';
import type {
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
  TextInputProps as RNTextInputProps,
  ColorValue as RNColorValue,
} from 'react-native';
import type {
  IAutocompleteDropdownRef as RNAutocompleteDropdownRef,
  AutocompleteDropdownItem as TRNAutocompleteDropdownItem,
  IAutocompleteDropdownProps as RNAutocompleteDropdownProps,
} from 'react-native-autocomplete-dropdown';

import { FormField } from './FormField';
import { EmptySearchResult } from './EmptySearchResult';
import { InputAddon } from './InputAddon';
import { Feather } from './icons';
import { useAppTheme } from '../hooks';

import type {
  BaseProps,
  InputShape,
  IconStateCallbackType,
  InputVariant,
  MakeStyles,
} from '../types';
import type { TextInputProps } from './TextInput';
import type { FontAwesomeIconName } from './icons';

interface AutocompleteDropdownProps extends BaseProps {
  dataSet?: Pick<RNAutocompleteDropdownProps, 'dataSet'>['dataSet'];
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
  label?: string;
  labelStyle?: RNStyleProp<RNTextStyle>;
  touched?: boolean;
  error?: string;
  errorStyle?: RNStyleProp<RNTextStyle>;
  placeholder?: string;
  textInputStyle?: RNStyleProp<RNTextStyle>;
  placeholderTextColor?: RNColorValue;
  initialValue?:
    | string
    | { id: string }
    | TRNAutocompleteDropdownItem
    | undefined;
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
  onSelectItem?: (item: TRNAutocompleteDropdownItem | null) => void;
  onClearPress?: () => void;
  onSubmitSearch?: RNTextInputProps['onSubmitEditing'];
  onOpenSuggestionsList?: (isOpened: boolean) => void;
  onBlur?: RNTextInputProps['onBlur'];
  showChevron?: boolean;
  closeOnBlur?: boolean;
  clearOnFocus?: boolean;
  showClear?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: Pick<TextInputProps, 'autoCapitalize'>['autoCapitalize'];
  isLoading?: boolean;
  useFilter?: boolean;
  dropdownControllerRef?: RefObject<
    RNAutocompleteDropdownRef | undefined | null
  >;
  textInputProps?: RNTextInputProps;
  isDisabled?: boolean;
  variant?: InputVariant;
  shape?: InputShape;
  numberOfLines?: number;
  fontSize?: number;
  leftIcon?: ReactNode | ((args: IconStateCallbackType) => ReactNode);
  leftIconName?: FontAwesomeIconName;
  leftIconSize?: number;
  leftIconColor?: RNColorValue;
  onPressLeftIcon?: () => void;
  rightIcon?: ReactNode | ((args: IconStateCallbackType) => ReactNode);
  rightIconName?: FontAwesomeIconName;
  rightIconSize?: number;
  rightIconColor?: RNColorValue;
  onPressRightIcon?: () => void;
  isRequired?: boolean;
}

function AutocompleteDropdown(props: AutocompleteDropdownProps) {
  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    isDisabled: props?.isDisabled,
    fontSize: props?.fontSize,
  });

  return (
    <FormField
      label={props?.label}
      labelStyle={[props?.labelStyle, styles?.label]}
      touched={props?.touched}
      error={props?.error}
      errorStyle={[styles?.error, props?.errorStyle]}
      containerStyle={[styles?.container, props?.containerStyle]}
      contentStyle={[styles?.content, props?.contentStyle]}
      isDisabled={props?.isDisabled}
      variant={props?.variant}
      shape={props?.shape}
      isRequired={props?.isRequired}
    >
      <InputAddon
        testID={`${props?.testID}.left`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.left`}
        icon={props?.leftIcon}
        iconName={props?.leftIconName}
        iconSize={props?.leftIconSize}
        iconColor={props?.leftIconColor}
        onPressIcon={props?.onPressLeftIcon}
        isEditable={!props?.isDisabled}
        isTouched={props?.touched}
        error={props?.error}
        iconContainerStyle={[styles?.leftIconContainer]}
      />
      <RNAutocompleteDropdown
        controller={(controller) => {
          if (props?.dropdownControllerRef) {
            props.dropdownControllerRef.current = controller;
          }
        }}
        initialValue={props?.initialValue}
        dataSet={props?.dataSet ?? null}
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
          numberOfLines: props?.numberOfLines ?? 1,
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
      <InputAddon
        testID={`${props?.testID}.right`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.right`}
        icon={props?.rightIcon}
        iconName={props?.rightIconName}
        iconSize={props?.rightIconSize}
        iconColor={props?.rightIconColor}
        onPressIcon={props?.onPressRightIcon}
        isEditable={!props?.isDisabled}
        isTouched={props?.touched}
        error={props?.error}
        iconContainerStyle={styles?.rightIconContainer}
      />
    </FormField>
  );
}

interface CustomMakeStyles extends MakeStyles {
  fontSize?: number;
}

function makeStyles({ colors, isDisabled, fontSize }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    label: {},
    textInput: {
      color: colors?.onSurface,
      fontSize: fontSize ?? responsive.size(18),
      paddingHorizontal: responsive?.size(5),
    },
    container: {},
    content: {
      paddingHorizontal: responsive?.size(5),
    },
    error: {},
    rightButtonsContainer: {},
    inputContainer: {
      backgroundColor: colors?.transparent,
      borderRadius: responsive.size(4),
      opacity: isDisabled ? 0.4 : 1,
      paddingVertical: responsive?.height((fontSize ?? 18) * 0.2),
    },
    suggestionsListContainer: {
      backgroundColor: colors?.inverseOnSurface,
    },
    autocompleteContainer: {
      flexGrow: 1,
      flexShrink: 1,
    },
    suggestionsListText: {
      color: colors?.onSurface,
    },
    leftIconContainer: {
      paddingLeft: responsive.size(10),
      paddingRight: responsive.size(5),
    },
    rightIconContainer: {
      paddingLeft: responsive.size(5),
      paddingRight: responsive.size(10),
    },
  });

  return styles;
}

export type { AutocompleteDropdownProps };
export { AutocompleteDropdown };
