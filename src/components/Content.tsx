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
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native';

import { useAppTheme } from '../hooks';

import type { BaseProps, BaseThemeVariant, MakeStyles } from '../types';

interface ContentProps extends BaseProps {
  behavior?: 'height' | 'position' | 'padding' | undefined;
  theme?: BaseThemeVariant;
  isKeyboardAvoidingViewEnabled?: boolean;
  isScrollEnabled?: boolean;
  keyboardAvoidingViewProps?: RNKeyboardAvoidingViewProps;
  scrollViewProps?: RNScrollViewProps;
  touchableWithoutFeedbackProps?: RNTouchableWithoutFeedbackProps;
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
}

function Content(props: PropsWithChildren<ContentProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <RNKeyboardAvoidingView
      behavior={
        props?.behavior ?? RNPlatform.OS === 'ios' ? 'padding' : undefined
      }
      enabled={props?.isKeyboardAvoidingViewEnabled}
      style={[styles.container, props?.containerStyle]}
      {...props?.keyboardAvoidingViewProps}
    >
      <RNTouchableWithoutFeedback
        onPress={RNKeyboard.dismiss}
        {...props?.touchableWithoutFeedbackProps}
      >
        <RNScrollView
          contentContainerStyle={[
            styles?.contentContainer,
            props?.contentStyle,
          ]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={props?.isScrollEnabled}
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
