import React, { Fragment } from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import type { ColorValue as RNColorValue } from 'react-native';

import { appColors } from '../../themes/appColors';
import type { SpinnerSize, BaseProps } from '../../types';

interface SpinnerProps extends BaseProps {
  isVisible?: boolean;
  size?: SpinnerSize;
  color?: RNColorValue;
}

function Spinner(props: SpinnerProps) {
  return (
    <Fragment>
      {props?.isVisible && (
        <RNActivityIndicator
          testID={props?.testID}
          accessible={props?.accessible}
          accessibilityLabel={props?.accessibilityLabel}
          size={props?.size}
          color={props?.color ?? appColors?.primary}
        />
      )}
    </Fragment>
  );
}

export type { SpinnerProps };
export { Spinner };
