import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIEvilIcons from 'react-native-vector-icons/EvilIcons';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { EvilIconName } from './type';

interface EvilIconsProps extends TestProps {
  name: EvilIconName;
  size?: number;
  color?: RNColorValue;
}

function EvilIcons(props: EvilIconsProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIEvilIcons
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { EvilIconsProps };
export { EvilIcons };
