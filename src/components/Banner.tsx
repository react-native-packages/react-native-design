/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet as RNStyleSheet, View as RNView } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
  ColorValue as RNColorValue,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Text } from './Text';
import type { TextVariant } from './Text';
import { colors } from '../themes/appColors';
import { responsive } from '../helpers';
import type { BaseProps } from '../types';

type BannerVariant = 'default' | 'warn' | 'info' | 'error';

interface BannerProps extends BaseProps {
  variant?: BannerVariant;
  content?: string;
  textVariant?: TextVariant;
  textStyle?: RNStyleProp<RNTextStyle>;
  containerStyle?: RNStyleProp<RNViewStyle>;
  hideIcon?: boolean;
  iconSize?: number;
  iconColor?: RNColorValue;
  icon?: React.ReactNode;
}

interface GetBannerIconArgs extends BaseProps {
  variant: BannerVariant;
  size?: number;
  color?: RNColorValue;
  style?: RNStyleProp<RNTextStyle>;
}

function getBannerIcon(args: GetBannerIconArgs) {
  switch (args?.variant) {
    case 'default':
      return <></>;
    case 'info':
      return (
        <MaterialIcons
          testID={args?.testID}
          accessible={args?.accessible}
          accessibilityLabel={args?.accessibilityLabel}
          name="info"
          color={args?.color ?? colors?.blue?.bright?.main}
          size={args?.size ?? responsive?.size(18)}
        />
      );
    case 'warn':
      return (
        <MaterialIcons
          testID={args?.testID}
          accessible={args?.accessible}
          accessibilityLabel={args?.accessibilityLabel}
          name="warning-amber"
          color={args?.color ?? colors?.black?.normal?.main}
          size={args?.size ?? responsive?.size(18)}
        />
      );
    case 'error':
      return (
        <MaterialIcons
          testID={args?.testID}
          accessible={args?.accessible}
          accessibilityLabel={args?.accessibilityLabel}
          name="error"
          color={args?.color ?? colors?.red?.normal?.main}
          size={args?.size ?? responsive?.size(18)}
        />
      );
  }
}

function Banner(props: PropsWithChildren<BannerProps>) {
  return (
    <RNView
      testID={`${props?.testID}.container`}
      accessible={props?.accessible}
      accessibilityLabel={`${props?.accessibilityLabel}.container`}
      style={[
        styles?.container,
        styles[props?.variant ?? 'default'],
        props?.containerStyle,
      ]}
    >
      {props?.content && (
        <RNView
          testID={`${props?.testID}.content`}
          accessible={props?.accessible}
          accessibilityLabel={`${props?.accessibilityLabel}.content`}
          style={styles?.content}
        >
          {!props?.hideIcon &&
            (props?.icon ??
              getBannerIcon({
                variant: props?.variant ?? 'default',
                size: props?.iconSize,
                color: props?.iconColor,
                testID: `${props?.testID}.icon`,
                accessible: props?.accessible,
                accessibilityLabel: `${props?.accessibilityLabel}.icon`,
              }))}
          <Text
            testID={`${props?.testID}.text`}
            accessible={props?.accessible}
            accessibilityLabel={`${props?.accessibilityLabel}.text`}
            variant={props?.textVariant ?? 'text'}
            style={[
              props?.textStyle,
              styles[`${props?.variant ?? 'default'}Text`],
            ]}
          >
            {props?.content}
          </Text>
        </RNView>
      )}
      {props?.children}
    </RNView>
  );
}

const styles = RNStyleSheet.create({
  container: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: responsive.size(5),
    paddingVertical: responsive.height(10),
  },
  content: {
    alignItems: 'center',
    columnGap: responsive.size(5),
    flexDirection: 'row',
  },
  default: {
    backgroundColor: colors?.black?.normal?.shadow,
    borderColor: colors?.black?.normal?.main,
  },
  defaultText: {
    color: colors?.black?.normal?.main,
  },
  info: {
    backgroundColor: colors?.blue?.bright?.shadow,
    borderColor: colors?.blue?.bright?.main,
  },
  infoText: {
    color: colors?.black?.normal?.main,
  },
  warn: {
    backgroundColor: colors?.yellow?.normal?.shadow,
    borderColor: colors?.yellow?.normal?.main,
  },
  warnText: {
    color: colors?.black?.normal?.main,
  },
  error: {
    backgroundColor: colors?.red?.normal?.shadow,
    borderColor: colors?.red?.normal?.main,
    color: colors?.red?.normal?.main,
  },
  errorText: {
    color: colors?.red?.normal?.main,
  },
  icon: {
    fontSize: responsive.size(18),
  },
});

export type { BannerProps };
export { Banner };
