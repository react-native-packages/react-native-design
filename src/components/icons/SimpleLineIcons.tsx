import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVISimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { SimpleLineIconName } from './type';

interface SimpleLineiconsProps extends TestProps {
  name: SimpleLineIconName;
  size?: number;
  color?: RNColorValue;
}

function SimpleLineicons(props: SimpleLineiconsProps) {
  const { colors } = useAppTheme();

  return (
    <RNVISimpleLineIcons
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { SimpleLineiconsProps };
export { SimpleLineicons };
