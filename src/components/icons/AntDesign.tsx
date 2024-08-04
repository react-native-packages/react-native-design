import React from 'react';
import { responsive } from '@rnpack/utils';
import RNVIAntDesign from 'react-native-vector-icons/AntDesign';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { TestProps } from '../../types';
import type { AntDesignIconName } from './type';

interface AntDesignProps extends TestProps {
  name: AntDesignIconName;
  size?: number;
  color?: RNColorValue;
}

function AntDesign(props: AntDesignProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIAntDesign
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { AntDesignProps };
export { AntDesign };
