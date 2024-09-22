import React from 'react';
import { responsive } from '@rnpack/utils';
import { StyleSheet, View, StatusBar } from 'react-native';

import type { PropsWithChildren } from 'react';
import type { Preview } from '@storybook/react';

import {
  Avatar,
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
        barStyle={mode === 'dark' ? 'dark-content' : 'dark-content'}
      />
      <ShadowEffect>
        <View style={styles?.headerContainer}>
          <Avatar
            size="medium"
            picture="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          />
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
      minHeight: responsive?.height(45),
      justifyContent: 'space-between',
      paddingHorizontal: responsive?.size(15),
      paddingVertical: responsive?.height(10),
    },
    title: {
      color: colors?.onPrimary,
    },
  });

  return styles;
}

export default preview;
