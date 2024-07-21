import React from 'react';
import type { ColorValue as RNColorValue } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import type { BaseProps } from '../../types';
import { responsive } from '../../helpers';
import { colors } from '../../themes/appColors';

interface FontAwesomeProps extends BaseProps {
  name: string;
  size?: number;
  color?: RNColorValue;
}

function FontAwesome(props: FontAwesomeProps) {
  return (
    <FontAwesomeIcon
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.grey?.granite?.main}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FontAwesomeProps };
export { FontAwesome };
