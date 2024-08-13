import React, { useEffect, useRef } from 'react';
import {
  Animated as RNAnimated,
  StyleSheet as RNStyleSheet,
} from 'react-native';
import { Easing as RNREasing } from 'react-native-reanimated';

import type { PropsWithChildren } from 'react';

import { useAppTheme } from '../hooks';

import type { BaseProps, Orientation, Rotation, MakeStyles } from '../types';

interface RotateAnimationProps extends BaseProps {
  orientation?: Orientation;
  rotation?: Rotation;
  duration?: number;
  outputRange?: Array<string>;
  loop?: boolean;
}

function RotateAnimation(props: PropsWithChildren<RotateAnimationProps>) {
  const { colors } = useAppTheme();

  const boxRotationValue: RNAnimated.Value = useRef<RNAnimated.Value>(
    new RNAnimated.Value(0)
  )?.current;

  const boxRotation: RNAnimated.AnimatedInterpolation<string | number> =
    boxRotationValue.interpolate({
      inputRange: [0, 1],
      outputRange:
        props?.outputRange ??
        (props?.orientation === 'vertical'
          ? props?.rotation === 'clockwise'
            ? ['0deg', '90deg']
            : ['180deg', '90deg']
          : props?.rotation === 'clockwise'
          ? ['90deg', '180deg']
          : ['90deg', '0deg']),
    });

  const styles = makeStyles({ colors, boxRotation });

  useEffect(() => {
    startBoxRotationAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function rotateAnimationConfig(): RNAnimated.CompositeAnimation {
    return RNAnimated.timing(boxRotationValue, {
      toValue: 1,
      duration: props?.duration ?? 800,
      easing: RNREasing?.ease,
      useNativeDriver: true,
    });
  }

  function startBoxRotationAnimation() {
    rotateAnimationConfig().start(onAnimationFinish);
  }

  function resetAnimation() {
    rotateAnimationConfig().reset();
  }

  function onAnimationFinish() {
    resetAnimation();
    if (props?.loop) {
      startBoxRotationAnimation();
    }
  }

  return (
    <RNAnimated.View style={styles?.container}>
      {props?.children}
    </RNAnimated.View>
  );
}

interface CustomMakeStyles extends MakeStyles {
  boxRotation: RNAnimated.AnimatedInterpolation<string | number>;
}

function makeStyles({ boxRotation }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      transform: [{ rotateZ: boxRotation }],
    },
  });

  return styles;
}

export type { RotateAnimationProps };
export { RotateAnimation };
