import { responsive } from '@rnpack/utils';
import RNVIFontAwesome from 'react-native-vector-icons/FontAwesome';

import type { ColorValue as RNColorValue } from 'react-native';

import { useAppTheme } from '../../hooks';

import type { BaseProps } from '../../types';
import type { FontAwesomeIconName } from './type';

interface FontAwesomeProps extends BaseProps {
  name: FontAwesomeIconName;
  size?: number;
  color?: RNColorValue;
}

function FontAwesome(props: FontAwesomeProps) {
  const { colors } = useAppTheme();

  return (
    <RNVIFontAwesome
      testID={props?.testID}
      accessible={props?.accessible}
      accessibilityLabel={props?.accessibilityLabel}
      name={props?.name}
      color={props?.color ?? colors?.onSurfaceDisabled}
      size={props?.size ?? responsive.size(21)}
    />
  );
}

export type { FontAwesomeProps };
export { FontAwesome };
