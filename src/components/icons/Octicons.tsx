import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIOcticons from 'react-native-vector-icons/Octicons';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { OctIconName } from './type';

interface OcticonsProps extends TestProps {
  name: OctIconName;
  size?: number;
  color?: RNColorValue;
}

function Octicons(props: OcticonsProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIOcticons
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { OcticonsProps };
export { Octicons };
