import React from 'react';
import type { ColorValue as RNColorValue } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import type { BaseProps } from '../../types';
import { responsive } from '../../helpers';
import { colors } from '../../themes/appColors';

interface IoniconsProps extends BaseProps {
  name: string;
  size?: number;
  color?: RNColorValue;
}

function Ionicons(props: IoniconsProps) {
  return (
    <IoniconsIcon
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.grey?.granite?.main}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { IoniconsProps };
export { Ionicons };
