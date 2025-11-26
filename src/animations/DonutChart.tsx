import { useEffect, useRef } from 'react';
import {
  View as RNView,
  StyleSheet as RNStyleSheet,
  TextInput as RNTextInput,
  Animated as RNAnimated,
} from 'react-native';
import { responsive } from '@rnpack/utils';
import Svg, { G, Circle } from 'react-native-svg';

import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
} from 'react-native';

import type { BaseProps, MakeStyles } from '../types';
import { useAppTheme } from '../hooks';
import { TextInput } from '../components/TextInput';

const AnimatedCircle = RNAnimated.createAnimatedComponent(Circle);
const AnimatedTextInput = RNAnimated.createAnimatedComponent(TextInput);

enum DonutChartVariant {
  CIRCLE = 'circle',
  SEMI_CIRCLE = 'semi-circle',
}
interface DonutChartProps extends BaseProps {
  radius: number;
  variant?: DonutChartVariant;
  strokeWidth?: number;
  percentage?: number;
  max?: number;
  duration?: number;
  delay?: number;
  fontSize?: number;
  textPrefix?: string;
  textPostfix?: string;
  textColor?: RNColorValue;
  textContainerStyle?: RNStyleProp<RNViewStyle>;
  textStyle?: RNStyleProp<RNTextStyle>;
}

function DonutChart(props: DonutChartProps) {
  console.info('Donut chart variant: ', props.variant);

  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    radius: props?.radius,
  });

  const animatedValue = useRef<RNAnimated.Value>(
    new RNAnimated.Value(0)
  ).current;

  const circleRef = useRef<Circle>(null);
  const textInputRef = useRef<RNTextInput>(null);

  const strokeWidthProp = props?.strokeWidth ?? Math.round(responsive.size(20));
  const maxProp = props?.max ?? 100;
  const percentageProp = props?.percentage ?? 0;

  const circleCircumference = 2 * Math.PI * props?.radius;
  const viewBoxSize = props?.radius + strokeWidthProp;

  useEffect(() => {
    animation(percentageProp);

    animatedValue.addListener((callback) => {
      if (circleRef?.current) {
        const maxPercentage = (100 * callback?.value) / maxProp;

        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercentage) / 100;

        circleRef?.current?.setNativeProps({
          strokeDashoffset,
        });
      }

      if (textInputRef?.current) {
        textInputRef?.current?.setNativeProps({
          text: `${props?.textPrefix ?? ''}${Math.round(callback.value)}${
            props?.textPostfix ?? ''
          }`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.max, props?.percentage]);

  function animation(toValue: number) {
    return RNAnimated.timing(animatedValue, {
      toValue,
      duration: props?.duration ?? 1000,
      delay: props?.delay ?? 100,
      useNativeDriver: true,
    }).start(onAnimationFinish);
  }

  function onAnimationFinish() {
    console.info('Animation completed');
  }

  return (
    <RNView style={styles?.container}>
      <Svg
        height={props?.radius * 2}
        width={props?.radius * 2}
        viewBox={`0 0 ${viewBoxSize * 2} ${viewBoxSize * 2}`}
      >
        <G rotation={180} originX={viewBoxSize} originY={viewBoxSize}>
          <Circle
            cx={'50%'}
            cy={'50%'}
            r={props?.radius}
            fill={colors?.transparent}
            strokeWidth={strokeWidthProp}
            stroke={colors?.primary}
            strokeOpacity={0.2}
            strokeDasharray={circleCircumference / 2}
            strokeLinecap="round"
          />
          <AnimatedCircle
            ref={circleRef}
            cx={'50%'}
            cy={'50%'}
            r={props?.radius}
            fill={colors?.transparent}
            strokeWidth={strokeWidthProp}
            stroke={colors?.primary}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={textInputRef}
        name={'percentage'}
        containerStyle={[
          styles?.percentageTextInputContainer,
          props?.textContainerStyle,
        ]}
        inputStyle={[styles?.percentageTextInput, props?.textStyle]}
        value={'0'}
        editable={false}
        disabledColor={props?.textColor ?? colors?.onPrimaryContainer}
        fontSize={props?.fontSize ?? responsive?.size(props?.radius / 2)}
      />
    </RNView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  radius: number;
}

function makeStyles(_args: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {},
    percentageTextInputContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      bottom: '50%',
    },
    percentageTextInput: {
      fontWeight: '800',
      textAlign: 'center',
    },
  });

  return styles;
}

export type { DonutChartProps };
export { DonutChart };
