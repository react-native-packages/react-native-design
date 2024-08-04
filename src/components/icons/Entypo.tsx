import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIEntypo from 'react-native-vector-icons/Entypo';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { EntypoIconName } from './type';

interface EntypoProps extends TestProps {
  name: EntypoIconName;
  size?: number;
  color?: RNColorValue;
}

function Entypo(props: EntypoProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIEntypo
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { EntypoProps };
export { Entypo };
