import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIFontistoIcon from 'react-native-vector-icons/Fontisto';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { BaseProps } from '../../types';
import type { FontistoIconName } from './type';

interface FontistoProps extends BaseProps {
  name: FontistoIconName;
  size?: number;
  color?: RNColorValue;
}

function Fontisto(props: FontistoProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIFontistoIcon
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FontistoProps };
export { Fontisto };
