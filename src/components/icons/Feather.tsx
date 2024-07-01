import React from 'react';
import type { ColorValue } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import type { TestProps } from '../../types/props';
import { responsive } from '../../helpers';
import { colors } from '../../themes/appColors';

interface FeatherProps extends TestProps {
  name: string;
  size?: number;
  color?: ColorValue;
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
