import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIZocialicons from 'react-native-vector-icons/Zocial';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { ZocialIconName } from './type';

interface ZocialiconsProps extends TestProps {
  name: ZocialIconName;
  size?: number;
  color?: RNColorValue;
}

function Zocialicons(props: ZocialiconsProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIZocialicons
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { ZocialiconsProps };
export { Zocialicons };
