import { responsive } from '@rnpack/utils';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import type { ReactNode } from 'react';
import type { ColorValue, FlexStyle, StyleProp, ViewStyle } from 'react-native';

import { useAppTheme } from './../hooks';
import { FormField } from './FormField';
import { MaterialCommunityIcons } from './icons';
import { Pressable } from './Pressable';
import { Text } from './Text';
import { CheckboxGroup } from './CheckboxGroup';

import type { IconStateCallbackType, BaseProps, MakeStyles } from './../types';
import type { FormFieldProps } from './FormField';
import type { TextProps } from './Text';
import type { MaterialCommunityIconName } from './icons';

type CheckboxShape = 'square' | 'square-sharp' | 'circle';
type CheckboxLabelPosition = 'left' | 'right' | 'top' | 'bottom' | 'inside';
type OnToggleCheckboxArgs = { id: string; isChecked?: boolean };

interface CheckboxProps extends BaseProps {
  id: string;
  isChecked?: boolean;
  isControlled?: boolean;
  shape?: CheckboxShape;
  label?: string;
  isDisabled?: boolean;
  labelProps?: TextProps;
  labelPosition?: CheckboxLabelPosition;
  formFieldProps?: FormFieldProps;
  checkmarkIcon?: ReactNode | ((args: IconStateCallbackType) => ReactNode);
  checkmarkIconName?: MaterialCommunityIconName;
  checkmarkSize?: number;
  checkmarkColor?: ColorValue;
  onToggleCheckbox?: (args: OnToggleCheckboxArgs) => void;
  containerStyle?: StyleProp<ViewStyle>;
  boxContainerStyle?: StyleProp<ViewStyle>;
}

function Checkbox(props: CheckboxProps) {
  const { colors } = useAppTheme();

  const isCheckedProp = props?.isChecked ?? false;
  const shapeProp = props?.shape ?? 'square';
  const labelPositionProp = props?.labelPosition ?? 'right';
  const checkmarkSizeProp = props?.checkmarkSize ?? responsive?.size(21);
  const checkmarkColorProp = props?.checkmarkColor ?? colors?.primary;

  const [isChecked, setIsChecked] = useState<boolean>(isCheckedProp);

  const styles = makeStyles({
    colors,
    isChecked: props?.isControlled ? isCheckedProp : isChecked,
    shape: shapeProp,
    labelPosition: labelPositionProp,
    checkmarkSize: checkmarkSizeProp,
    checkmarkColor: checkmarkColorProp,
  });

  function onToggleCheckbox() {
    if (props?.isControlled) {
      props?.onToggleCheckbox?.({ id: props?.id });
      return;
    }

    const checkedStatus = !isChecked;

    setIsChecked(checkedStatus);

    props?.onToggleCheckbox?.({ isChecked: checkedStatus, id: props?.id });
  }

  return (
    <FormField {...props?.formFieldProps} isDisabled={props?.isDisabled}>
      <Pressable
        style={[styles?.container, props?.containerStyle]}
        onPress={onToggleCheckbox}
        disabled={props?.isDisabled}
      >
        <View style={[styles?.boxContainer, props?.boxContainerStyle]}>
          {labelPositionProp !== 'inside' &&
            (props?.isControlled ? isCheckedProp : isChecked) &&
            (typeof props?.checkmarkIcon === 'function'
              ? props?.checkmarkIcon({
                  color: checkmarkColorProp,
                  size: checkmarkSizeProp,
                })
              : props?.checkmarkIcon ?? (
                  <MaterialCommunityIcons
                    name={props?.checkmarkIconName ?? 'check'}
                    size={checkmarkSizeProp}
                    color={checkmarkColorProp}
                  />
                ))}
          {labelPositionProp === 'inside' && (
            <Text variant="label" {...props?.labelProps}>
              {props?.label}
            </Text>
          )}
        </View>
        {labelPositionProp !== 'inside' && (
          <Text variant="label" {...props?.labelProps}>
            {props?.label}
          </Text>
        )}
      </Pressable>
    </FormField>
  );
}

function getShapeStyle(args: { shape: CheckboxShape; size: number }): number {
  switch (args?.shape) {
    case 'square':
      return responsive?.size(args?.size / 4.5);
    case 'square-sharp':
      return 0;
    case 'circle':
      return 100000;
  }
}

function getLabelPositionStyle(
  position: CheckboxLabelPosition
): Pick<FlexStyle, 'flexDirection'>['flexDirection'] {
  switch (position) {
    case 'left':
      return 'row-reverse';
    case 'right':
      return 'row';
    case 'top':
      return 'column-reverse';
    case 'bottom':
      return 'column';
    case 'inside':
      return 'column';
  }
}

interface CustomMakeStyles extends MakeStyles {
  isChecked: boolean;
  shape: CheckboxShape;
  labelPosition: CheckboxLabelPosition;
  checkmarkSize: number;
  checkmarkColor: ColorValue;
}

function makeStyles({
  colors,
  isChecked,
  shape,
  labelPosition,
  checkmarkSize,
}: CustomMakeStyles) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      columnGap: responsive?.size(5),
      flexDirection: getLabelPositionStyle(labelPosition),
      justifyContent: 'center',
      rowGap: responsive?.size(5),
    },
    boxContainer: {
      alignItems: 'center',
      backgroundColor:
        isChecked && labelPosition === 'inside'
          ? colors?.primary
          : colors?.transparent,
      borderColor: colors?.onBackground,
      borderRadius: getShapeStyle({ shape, size: checkmarkSize }),
      borderWidth: 1,
      height: Math.round(checkmarkSize * 1.2),
      justifyContent: 'center',
      width: Math.round(checkmarkSize * 1.2),
    },
  });

  return styles;
}

Checkbox.Group = CheckboxGroup;

export type {
  CheckboxShape,
  CheckboxLabelPosition,
  OnToggleCheckboxArgs,
  CheckboxProps,
};
export { Checkbox };
