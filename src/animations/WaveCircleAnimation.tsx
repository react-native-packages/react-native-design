import { Fragment } from 'react';
import { StyleSheet as RNStyleSheet } from 'react-native';
import { responsive } from '@rnpack/utils';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

import type { PropsWithChildren } from 'react';
import type { ColorValue as RNColorValue } from 'react-native';
import type { MotiProps } from 'moti';

import { useAppTheme } from './../hooks';
import type { BaseProps, MakeStyles, WaveCircleMotion } from './../types';

interface WaveCircleAnimationProps extends BaseProps {
  count?: number;
  isVisible?: boolean;
  duration?: number;
  delay?: number;
  loop?: boolean;
  repeatReverse?: boolean;
  animate?: Pick<MotiProps, 'animate'>['animate'];
  from?: Pick<MotiProps, 'from'>['from'];
  color?: RNColorValue;
  radius?: number;
  motion?: WaveCircleMotion;
}

function WaveCircleAnimation(
  props: PropsWithChildren<WaveCircleAnimationProps>
) {
  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    color: props?.color,
    radius: props?.radius,
  });

  return (
    <Fragment>
      {props?.children}
      {props?.isVisible &&
        [...Array(props?.count ?? 3).keys()]?.map((index) => (
          <MotiView
            key={index}
            from={
              props?.from ?? props?.motion === 'inside'
                ? { opacity: 0, scale: 4 }
                : { opacity: 0.3, scale: 1 }
            }
            animate={
              props?.animate ?? props?.motion === 'inside'
                ? { opacity: 0.3, scale: 1 }
                : { opacity: 0, scale: 4 }
            }
            // @ts-expect-error: moti error need react-native v0.74
            transition={{
              type: 'timing',
              duration: props?.duration ?? 2000,
              easing: Easing.out(Easing.ease),
              delay: index * (props?.delay ?? 500),
              loop: props?.loop ?? true,
              repeatReverse: props?.repeatReverse ?? false,
            }}
            style={[RNStyleSheet.absoluteFillObject, styles?.wave]}
          />
        ))}
    </Fragment>
  );
}

interface CustomMakeStyles extends MakeStyles {
  color?: RNColorValue;
  radius?: number;
}

function makeStyles({ colors, color, radius }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    wave: {
      backgroundColor: color ?? colors?.background,
      borderRadius: radius ?? responsive?.size(100),
    },
  });

  return styles;
}

export type { WaveCircleAnimationProps };
export { WaveCircleAnimation };
