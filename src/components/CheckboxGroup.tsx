import { Children, cloneElement, isValidElement, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { responsive, structuredClone } from '@rnpack/utils';

import type { PropsWithChildren } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { FormField } from './FormField';
import { useAppTheme } from './../hooks/appTheme';

import type { BaseProps, MakeStyles } from './../types';
import type { FormFieldProps } from './FormField';
import type { CheckboxProps, OnToggleCheckboxArgs } from './Checkbox';

interface OnToggleGroupCheckboxArgs {
  checkedItems: Array<string>;
  isChecked?: boolean;
}

interface CheckboxGroupCommon extends BaseProps {
  isMulti?: boolean;
  checkedIds?: Array<string>;
  onToggleCheckbox?: (args: OnToggleGroupCheckboxArgs) => void;
  formFieldProps?: FormFieldProps;
  containerStyle?: StyleProp<ViewStyle>;
  isRequired?: boolean;
}

type CheckboxGroupProps = CheckboxGroupCommon;

function CheckboxGroup(props: PropsWithChildren<CheckboxGroupProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  const [checkedIds, setCheckedIds] = useState<Array<string>>(
    props?.checkedIds ?? []
  );

  function onToggleCheckbox(args: OnToggleCheckboxArgs) {
    if (props?.isMulti) {
      const _checkedIds: Array<string> = checkedIds;

      const existsId = _checkedIds?.findIndex((item) => item === args?.id);

      if (existsId !== -1) {
        _checkedIds?.splice(existsId, 1);
      }

      if (existsId === -1) {
        _checkedIds?.push(args?.id);
      }

      setCheckedIds(structuredClone(_checkedIds) as Array<string>);

      props?.onToggleCheckbox?.({ checkedItems: checkedIds });

      return;
    }

    let isChecked = true;

    if (checkedIds?.includes(args?.id)) {
      if (!props?.isRequired) {
        isChecked = false;
        setCheckedIds([]);
      }
    } else {
      setCheckedIds([args?.id]);
    }

    props?.onToggleCheckbox?.({ checkedItems: [args?.id], isChecked });
  }

  return (
    <FormField {...props?.formFieldProps}>
      <View style={[styles?.container, props?.containerStyle]}>
        {Children?.map(props?.children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              ...child?.props,
              isControlled: true,
              isChecked: checkedIds?.includes(child?.props?.id),
              onToggleCheckbox,
            } as CheckboxProps);
          }

          return child;
        })}
      </View>
    </FormField>
  );
}

function makeStyles({ colors: _colors }: MakeStyles) {
  const styles = StyleSheet.create({
    container: {
      columnGap: responsive?.size(20),
      flexDirection: 'row',
    },
  });

  return styles;
}

export type { OnToggleGroupCheckboxArgs, CheckboxGroupProps };
export { CheckboxGroup };
