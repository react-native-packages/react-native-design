import { Fragment } from 'react';
import { responsive } from '@rnpack/utils';

import type { ReactNode } from 'react';
import type { ColorValue as RNColorValue } from 'react-native';

import { Ionicons } from './icons';
import { useAppTheme } from '../hooks';
import { IconButton } from './IconButton';

import type { IonIconName } from './icons';
import type { ThemeMode } from '../types';

interface ThemeSwitchProps {
  lightIcon?: ReactNode;
  lightIconName?: IonIconName;
  lightIconSize?: number;
  lightIconColor?: RNColorValue;
  darkIcon?: ReactNode;
  darkIconName?: IonIconName;
  darkIconSize?: number;
  darkIconColor?: RNColorValue;
  onPressThemeSwitch?: (mode?: ThemeMode) => void;
}

function ThemeSwitch(props: ThemeSwitchProps) {
  const { colors, mode, changeAppTheme } = useAppTheme();

  function onPressThemeSwitch(theme?: ThemeMode) {
    if (props?.onPressThemeSwitch) {
      return props?.onPressThemeSwitch(theme);
    }

    const _mode = theme ?? (mode === 'dark' ? 'light' : 'dark');

    changeAppTheme(_mode);
  }

  return (
    <Fragment>
      {mode === 'dark'
        ? props?.lightIcon ?? (
            <IconButton onPress={() => onPressThemeSwitch('light')}>
              <Ionicons
                name={props?.lightIconName ?? 'sunny-outline'}
                size={props?.lightIconSize ?? responsive?.size(21)}
                color={props?.lightIconColor ?? colors?.onBackground}
              />
            </IconButton>
          )
        : props?.darkIcon ?? (
            <IconButton onPress={() => onPressThemeSwitch('dark')}>
              <Ionicons
                name={props?.darkIconName ?? 'moon-outline'}
                size={props?.darkIconSize ?? responsive?.size(21)}
                color={props?.darkIconColor ?? colors?.onBackground}
              />
            </IconButton>
          )}
    </Fragment>
  );
}

export type { ThemeSwitchProps };
export { ThemeSwitch };
