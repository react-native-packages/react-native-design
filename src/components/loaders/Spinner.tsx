import React from 'react';
import { ActivityIndicator } from 'react-native';
import type { ColorValue } from 'react-native';

import { appColors } from '../../themes/appColors';
import type { SpinnerSize, TestProps } from '../../types/props';

interface SpinnerProps extends TestProps {
  isVisible?: boolean;
  size?: SpinnerSize;
  color?: ColorValue;
}

function Spinner(props: SpinnerProps) {
  return (
    <React.Fragment>
      {props?.isVisible && (
        <ActivityIndicator
          testID={props?.testID}
          accessible={props?.accessible}
          accessibilityLabel={props?.accessibilityLabel}
          size={props?.size}
          color={props?.color ?? appColors?.primary}
        />
      )}
    </React.Fragment>
  );
}

export type { SpinnerProps };
export { Spinner };
