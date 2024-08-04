import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIFeatherIcon from 'react-native-vector-icons/Feather';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { BaseProps } from '../../types';
import type { FeatherIconName } from './type';

interface FeatherProps extends BaseProps {
  name: FeatherIconName;
  size?: number;
  color?: RNColorValue;
}

function Feather(props: FeatherProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIFeatherIcon
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FeatherProps };
export { Feather };
