import { useEffect, useState } from 'react';
import { Switch as RNSwitch, StyleSheet as RNStyleSheet } from 'react-native';
import { responsive } from '@rnpack/utils';

import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { useAppTheme } from '../hooks';
import { FormField } from './FormField';

import type { BaseProps, MakeStyles, Orientation } from './../types';
import type { FormFieldProps } from './FormField';

interface SwitchProps extends BaseProps {
  label?: string;
  isOn?: boolean;
  orientation?: Orientation;
  onChange?: (isOn: boolean) => void;
  isDisabled?: boolean;
  numberOfLines?: number;
  formFieldProps?: FormFieldProps;
  labelStyle?: RNStyleProp<RNTextStyle>;
  switchStyle?: RNStyleProp<RNViewStyle>;
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
}

function Switch(props: SwitchProps) {
  const orientationProp = props?.orientation ?? 'horizontal';

  const { colors } = useAppTheme();

  const styles = makeStyles({ colors, orientation: orientationProp });

  const [isOn, setIsOn] = useState<boolean>(props?.isOn ?? false);

  useEffect(() => {
    setIsOn(props?.isOn ?? false);
  }, [props?.isOn]);

  function onChange() {
    props?.onChange?.(!isOn);

    setIsOn((value) => !value);
  }
  return (
    <FormField
      label={props?.label}
      labelProps={{ numberOfLines: props?.numberOfLines }}
      containerStyle={[styles?.container, props?.containerStyle]}
      contentStyle={[styles?.content, props?.contentStyle]}
      {...props?.formFieldProps}
    >
      <RNSwitch
        value={isOn}
        onChange={onChange}
        thumbColor={props?.isDisabled ? undefined : colors?.primary}
        trackColor={{
          true: props?.isDisabled ? colors?.surfaceDisabled : colors?.primary,
          false: props?.isDisabled
            ? colors?.onSurfaceDisabled
            : colors?.backdrop,
        }}
        disabled={props?.isDisabled}
        style={props?.switchStyle}
      />
    </FormField>
  );
}

interface CustomMakeStyles extends MakeStyles {
  orientation: Orientation;
}

function makeStyles({ colors: _colors, orientation }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      columnGap: responsive?.size(10),
      rowGap: responsive?.size(0),
      alignItems: orientation === 'horizontal' ? 'center' : 'flex-start',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      flexWrap: 'wrap',
      justifyContent: orientation === 'horizontal' ? 'space-between' : 'center',
    },
    content: {
      paddingHorizontal: responsive?.size(6),
    },
    label: {
      fontSize: responsive?.size(16),
    },
  });

  return styles;
}

export type { SwitchProps };
export { Switch };
