import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIIonicons from 'react-native-vector-icons/Ionicons';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { BaseProps } from '../../types';
import type { IonIconName } from './type';

interface IoniconsProps extends BaseProps {
  name: IonIconName;
  size?: number;
  color?: RNColorValue;
}

function Ionicons(props: IoniconsProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIIonicons
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { IoniconsProps };
export { Ionicons };
