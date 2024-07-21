import React from 'react';
import type { ColorValue as RNColorValue } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import type { BaseProps } from '../../types';
import { responsive } from '../../helpers';
import { colors } from '../../themes/appColors';

interface FeatherProps extends BaseProps {
  name: string;
  size?: number;
  color?: RNColorValue;
}

function Feather(props: FeatherProps) {
  return (
    <FeatherIcon
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.grey?.granite?.main}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FeatherProps };
export { Feather };
