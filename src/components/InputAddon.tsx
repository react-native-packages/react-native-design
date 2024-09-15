import React, { Fragment } from 'react';
import { View as RNView, StyleSheet as RNStyleSheet } from 'react-native';

import type { ReactNode } from 'react';
import type {
  ColorValue as RNColorValue,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { IconButton } from './IconButton';
import { FontAwesome } from './icons';
import { useAppTheme } from '../hooks';
import type { BaseProps, MakeStyles } from '../types';
import type { FontAwesomeIconName } from './icons';

interface InputAddonProps extends BaseProps {
  icon?: ReactNode;
  iconName?: FontAwesomeIconName;
  iconSize?: number;
  iconColor?: RNColorValue;
  onPressIcon?: () => void;
  isEditable?: boolean;
  isTouched?: boolean;
  error?: string;
  iconContainerStyle?: RNStyleProp<RNViewStyle>;
  iconButtonContainer?: RNStyleProp<RNViewStyle>;
}

function InputAddon(props: InputAddonProps) {
  const { colors } = useAppTheme();

  const styles = makeStyles({ colors });

  return (
    <Fragment>
      {props?.icon ||
        (props?.iconName && (
          <RNView
            testID={`${props?.testID}.IconContainer`}
            accessible={props?.accessible}
            accessibilityLabel={`${props?.accessibilityLabel}.IconContainer`}
            style={[styles?.iconContainer, props?.iconContainerStyle]}
          >
            <IconButton
              containerStyle={[
                styles?.iconButtonContainer,
                props?.iconButtonContainer,
              ]}
              onPress={props?.onPressIcon}
              disabled={!props?.isEditable}
            >
              <FontAwesome
                testID={`${props?.testID}.Icon`}
                accessible={props?.accessible}
                accessibilityLabel={`${props?.accessibilityLabel}.Icon`}
                name={props?.iconName}
                size={props?.iconSize ?? 24}
                color={
                  !props?.isEditable
                    ? colors?.onSurfaceDisabled
                    : props?.isTouched && props?.error
                    ? colors?.error
                    : props?.iconColor ?? colors?.onSurface
                }
              />
            </IconButton>
          </RNView>
        ))}
    </Fragment>
  );
}

function makeStyles({ colors: _colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
    iconContainer: {},
    iconButtonContainer: {
      padding: 0,
    },
  });

  return styles;
}

export type { InputAddonProps };
export { InputAddon };
