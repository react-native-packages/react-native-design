import React from 'react';
import { responsive } from '@rnpack/utils';
import { StyleSheet as RNStyleSheet } from 'react-native';

import type { PropsWithChildren } from 'react';
import type {
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { useAppTheme } from '../hooks';
import { Pressable } from './Pressable';
import { Container } from './Container';
import { ShadowEffect } from '../animations';

import type { BaseProps, MakeStyles, BaseThemeVariant } from '../types';

interface CardProps extends BaseProps {
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  isShadowVisible?: boolean;
  theme?: BaseThemeVariant;
}

function Card(props: PropsWithChildren<CardProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  function onPress() {
    if (props?.onPress) {
      props?.onPress();
    }
  }

  return (
    <React.Fragment>
      <Pressable
        testID={`${props?.testID}.container`}
        accessible={props?.accessible}
        accessibilityLabel={`${props?.accessibilityLabel}.container`}
        disabled={props?.disabled}
        onPress={onPress}
        style={props?.containerStyle}
      >
        <ShadowEffect isShadowVisible={props?.isShadowVisible !== false}>
          <Container
            testID={`${props?.testID}.content`}
            accessible={props?.accessible}
            accessibilityLabel={`${props?.accessibilityLabel}.content`}
            style={[styles?.content, props?.contentStyle]}
            theme={props?.theme}
          >
            {props?.children}
          </Container>
        </ShadowEffect>
      </Pressable>
    </React.Fragment>
  );
}

function makeStyles({ colors: _colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
    content: {
      elevation: 5,
      paddingHorizontal: responsive.size(10),
      paddingVertical: responsive.height(15),
      rowGap: responsive.height(15),
    },
  });

  return styles;
}
export type { CardProps };
export { Card };
