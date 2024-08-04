import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { BaseProps } from '../../types';
import type { FontAwesome5IconName } from './type';

interface FontAwesome5Props extends BaseProps {
  name: FontAwesome5IconName;
  size?: number;
  color?: RNColorValue;
}

function FontAwesome5(props: FontAwesome5Props) {
  const { colors } = useAppTheme();

  return (
    <RNVIFontAwesome5
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FontAwesome5Props };
export { FontAwesome5 };
