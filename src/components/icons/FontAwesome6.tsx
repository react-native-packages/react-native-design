import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIFontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { BaseProps } from '../../types';
import type { FontAwesome6IconName } from './type';

interface FontAwesome6Props extends BaseProps {
  name: FontAwesome6IconName;
  size?: number;
  color?: RNColorValue;
}

function FontAwesome6(props: FontAwesome6Props) {
  const { colors } = useAppTheme();

  return (
    <RNVIFontAwesome6
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FontAwesome6Props };
export { FontAwesome6 };
