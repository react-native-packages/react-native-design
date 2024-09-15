import React from 'react';
import {
  Platform as RNPlatform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  ScrollView as RNScrollView,
  StyleSheet as RNStyleSheet,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  Keyboard as RNKeyboard,
} from 'react-native';

import type { PropsWithChildren } from 'react';
import type {
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';

import { useAppTheme } from '../hooks';

import type { BaseProps, BaseThemeVariant, MakeStyles } from '../types';

interface ContentProps extends BaseProps {
  theme?: BaseThemeVariant;
  containerStyle?: RNStyleProp<RNViewStyle>;
  style?: RNStyleProp<RNViewStyle>;
  scrollViewProps?: RNScrollViewProps;
}

function Content(props: PropsWithChildren<ContentProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <RNKeyboardAvoidingView
      behavior={RNPlatform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, props?.containerStyle]}
    >
      <RNTouchableWithoutFeedback onPress={RNKeyboard.dismiss}>
        <RNScrollView
          contentContainerStyle={[styles?.contentContainer, props?.style]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          {...props?.scrollViewProps}
        >
          {props?.children}
        </RNScrollView>
      </RNTouchableWithoutFeedback>
    </RNKeyboardAvoidingView>
  );
}

interface CustomMakeStyles extends MakeStyles {
  theme?: BaseThemeVariant;
}

function makeStyles({ colors, theme }: CustomMakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      // flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
    },
    contentColor: {
      backgroundColor: theme
        ? colors?.[`${theme}Container`]
        : colors?.background,
    },
  });

  return styles;
}

export type { ContentProps };
export { Content };
