import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIFoundation from 'react-native-vector-icons/Foundation';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { FoundationIconName } from './type';

interface FoundationProps extends TestProps {
  name: FoundationIconName;
  size?: number;
  color?: RNColorValue;
}

function Foundation(props: FoundationProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIFoundation
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FoundationProps };
export { Foundation };
