import { StyleSheet as RNStyleSheet, View as RNView } from 'react-native';
import { responsive } from '@rnpack/utils';

import type { PropsWithChildren } from 'react';
import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
} from 'react-native';

import { Text } from './Text';
import { useAppTheme } from './../hooks';
import type { BadgePosition, BaseProps, MakeStyles } from '../types';

interface BadgeProps extends BaseProps {
  count?: number;
  countColor?: RNColorValue;
  countBackgroundColor?: RNColorValue;
  countContainerStyle?: RNStyleProp<RNViewStyle>;
  countStyle?: RNStyleProp<RNTextStyle>;
  isIndication?: boolean;
  indicatorColor?: RNColorValue;
  indicatorStyle?: RNStyleProp<RNViewStyle>;
  containerStyle?: RNStyleProp<RNViewStyle>;
  position?: BadgePosition;
}

function Badge(props: PropsWithChildren<BadgeProps>) {
  const { colors } = useAppTheme();

  const styles = makeStlyes({
    colors,
    position: props?.position ?? 'top-right',
    countColor: props?.countColor,
    countBackgroundColor: props?.countBackgroundColor,
    indicatorColor: props?.indicatorColor,
  });

  return (
    <RNView style={[styles?.container, props?.containerStyle]}>
      {props?.count?.toString() && (
        <RNView
          style={[
            styles?.countContainer,
            styles?.alignment,
            props?.countContainerStyle,
          ]}
        >
          <Text style={[styles?.count, props?.countStyle]}>{props?.count}</Text>
        </RNView>
      )}
      {props?.isIndication && (
        <RNView
          style={[styles?.indicator, styles?.alignment, props?.indicatorStyle]}
        />
      )}
      {props?.children}
    </RNView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  position: BadgePosition;
  countColor?: RNColorValue;
  countBackgroundColor?: RNColorValue;
  indicatorColor?: RNColorValue;
}

function makeStlyes({
  colors,
  position,
  countColor,
  countBackgroundColor,
  indicatorColor,
}: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {},
    indicator: {
      borderRadius: responsive?.size(10),
      backgroundColor: indicatorColor ?? colors?.error,
      height: responsive?.size(10),
      width: responsive?.size(10),
    },
    countContainer: {
      alignItems: 'center',
      backgroundColor: countBackgroundColor ?? colors?.error,
      borderRadius: responsive?.size(10),
      justifyContent: 'center',
      height: responsive?.size(15),
      width: responsive?.size(15),
    },
    alignment: {
      position: 'absolute',
      bottom: position.includes('bottom') ? 0 : undefined,
      left: position.includes('left') ? 0 : undefined,
      right: position.includes('right') ? 0 : undefined,
      top: position.includes('top') ? 0 : undefined,
      zIndex: 1,
    },
    count: {
      fontSize: responsive?.size(8),
      fontWeight: 'bold',
      color: countColor ?? colors?.onError,
    },
  });

  return styles;
}

export type { BadgeProps };
export { Badge };
