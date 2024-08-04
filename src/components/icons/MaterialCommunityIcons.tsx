import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { MaterialCommunityIconName } from './type';

interface MaterialCommunityIconsProps extends TestProps {
  name: MaterialCommunityIconName;
  size?: number;
  color?: RNColorValue;
}

function MaterialCommunityIcons(props: MaterialCommunityIconsProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIMaterialCommunityIcons
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { MaterialCommunityIconsProps };
export { MaterialCommunityIcons };
