import React from 'react';
import type { ColorValue } from 'react-native';

import type { TestProps } from '../../types/props';
import { Spinner } from '../loaders';
import { FontAwesome } from '../icons';

interface ButtonAddonProps extends TestProps {
  isLoading?: boolean;
  loaderColor?: ColorValue;
  icon?: React.ReactNode;
  iconName?: string;
  iconSize?: number;
  iconColor?: ColorValue;
}

function ButtonAddon(props: ButtonAddonProps) {
  return (
    <React.Fragment>
      <Spinner
        testID={`${props?.testID}.spinner`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.spinner`}
        isVisible={props?.isLoading}
        color={props?.loaderColor}
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
    </React.Fragment>
  );
}

export type { ButtonAddonProps };
export { ButtonAddon };
