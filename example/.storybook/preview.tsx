import React from 'react';
import { responsive } from '@rnpack/utils';
import { StyleSheet, View, StatusBar } from 'react-native';

import type { PropsWithChildren } from 'react';
import type { Preview } from '@storybook/react';

import {
  DesignProvider,
  ShadowEffect,
  Text,
  ThemeSwitch,
  useAppTheme,
} from 'react-native-design';
import type { MakeStyles } from 'react-native-design';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <DesignProvider>
        <PreviewChild>
          <Story />
        </PreviewChild>
      </DesignProvider>
    ),
  ],
};

interface PreviewChildProps {}

function PreviewChild(props: PropsWithChildren<PreviewChildProps>) {
  const { colors, mode } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <View style={styles?.container}>
      <StatusBar
        backgroundColor={colors?.background}
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ShadowEffect>
        <View style={styles?.headerContainer}>
          <Text variant="title" style={styles?.title}>
            React Native Design
          </Text>
          <ThemeSwitch
            darkIconColor={colors?.onPrimary}
            lightIconColor={colors?.onPrimary}
          />
        </View>
      </ShadowEffect>
      {props?.children}
    </View>
  );
}

function makeStyles({ colors }: MakeStyles) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors?.background,
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center',
      backgroundColor: colors?.primary,
      flexDirection: 'row',
      height: responsive?.height(45),
      justifyContent: 'space-between',
      paddingHorizontal: responsive?.size(15),
    },
    title: {
      color: colors?.onPrimary,
    },
  });

  return styles;
}

export default preview;
