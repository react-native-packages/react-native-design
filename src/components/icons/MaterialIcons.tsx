import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { MaterialIconName } from './type';

interface MaterialIconsProps extends TestProps {
  name: MaterialIconName;
  size?: number;
  color?: RNColorValue;
}

function MaterialIcons(props: MaterialIconsProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIMaterialIcons
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { MaterialIconsProps };
export { MaterialIcons };
