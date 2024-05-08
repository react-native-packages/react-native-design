import React from 'react';
import type { ColorValue } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import type { TestProps } from '../../types/props';
import { responsive } from '../../helpers';
import { colors } from '../../themes/appColors';

interface FontAwesomeProps extends TestProps {
  name: string;
  size?: number;
  color?: ColorValue;
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
