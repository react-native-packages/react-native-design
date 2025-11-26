import { Fragment } from 'react';

import type { ReactNode } from 'react';
import type { ColorValue as RNColorValue } from 'react-native';

import { Spinner } from '../loaders';
import { FontAwesome } from '../icons';

import type { FontAwesomeIconName } from '../icons';
import type { BaseProps, SpinnerSize } from '../../types';

interface ButtonAddonProps extends BaseProps {
  isLoading?: boolean;
  loaderSize?: SpinnerSize;
  loaderColor?: RNColorValue;
  icon?: ReactNode;
  iconName?: FontAwesomeIconName;
  iconSize?: number;
  iconColor?: RNColorValue;
}

function ButtonAddon(props: ButtonAddonProps) {
  return (
    <Fragment>
      <Spinner
        testID={`${props?.testID}.spinner`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.spinner`}
        isVisible={props?.isLoading}
        color={props?.loaderColor}
        size={props?.loaderSize}
      />
      {!props?.isLoading &&
        (props?.icon ||
          (props?.iconName && (
            <FontAwesome
              testID={`${props?.testID}.icon`}
              accessible={props?.accessible}
              accessibilityLabel={`${props?.accessibilityLabel}.icon`}
              name={props?.iconName}
              size={props?.iconSize}
              color={props?.iconColor}
            />
          )))}
    </Fragment>
  );
}

export type { ButtonAddonProps };
export { ButtonAddon };
