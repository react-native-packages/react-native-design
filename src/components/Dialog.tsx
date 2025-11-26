import { Fragment } from 'react';
import {
  Modal as RNModal,
  Pressable as RNPressable,
  StyleSheet as RNStyleSheet,
  View as RNView,
} from 'react-native';
import { responsive } from '@rnpack/utils';

import type { PropsWithChildren, ReactNode } from 'react';
import type {
  NativeSyntheticEvent as RNNativeSyntheticEvent,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
  TextStyle as RNTextStyle,
  ColorValue as RNColorValue,
} from 'react-native';

import { Text } from './Text';
import { IconButton } from './IconButton';
import { Ionicons } from './icons';
import { Divider } from './dividers';
import { Button } from './Button';
import { useAppTheme } from '../hooks';

import type { ModalAnimationType, BaseProps, MakeStyles } from '../types';
import type { TextVariant } from './Text';

interface DialogProps extends BaseProps {
  isVisible?: boolean;
  onDismiss?: () => void;
  isCollapsable?: boolean;
  rootStyle?: RNStyleProp<RNViewStyle>;
  containerStyle?: RNStyleProp<RNViewStyle>;
  contentStyle?: RNStyleProp<RNViewStyle>;
  title?: string;
  transparent?: boolean;
  animationType?: ModalAnimationType;
  onRequestClose?: (event: RNNativeSyntheticEvent<unknown>) => void;
  dialogTitleContainerStyle?: RNStyleProp<RNViewStyle>;
  dialogTitleStyle?: RNStyleProp<RNTextStyle>;
  dialogTitleVariant?: TextVariant;
  hideDialogTitleDivider?: boolean;
  dialogContentContainerStyle?: RNStyleProp<RNViewStyle>;
  titleDividerColor?: RNColorValue;
  actionDividerColor?: RNColorValue;
  actionContainerStyle?: RNStyleProp<RNViewStyle>;
  hideActionContainerDivider?: boolean;
  actionContentStyle?: RNStyleProp<RNViewStyle>;
  acceptText?: string;
  onPressAccept?: () => void;
  hideAccept?: boolean;
  rejectText?: string;
  onPressReject?: () => void;
  hideReject?: boolean;
  actionButtonContainerStyle?: RNStyleProp<RNViewStyle>;
  actionButtonTitleStyle?: RNStyleProp<RNTextStyle>;
  numberOfLinesForTitle?: number;
  customAction?: ReactNode;
  hideClose?: boolean;
}

function Dialog(props: PropsWithChildren<DialogProps>) {
  const { colors } = useAppTheme();

  const styles = makeStyle({ colors });

  return (
    <Fragment>
      <RNModal
        visible={props?.isVisible}
        onDismiss={props?.onDismiss}
        collapsable={props?.isCollapsable}
        transparent={props?.transparent}
        animationType={props?.animationType}
        onRequestClose={props?.onRequestClose}
        style={props?.rootStyle}
      >
        <RNPressable
          style={[styles?.container, props?.containerStyle]}
          onPress={props?.isCollapsable ? props?.onDismiss : null}
        >
          <RNView style={[styles?.content, props?.contentStyle]}>
            {props?.title && (
              <RNView
                style={[
                  styles?.dialogTitleContainer,
                  props?.dialogTitleContainerStyle,
                ]}
              >
                <Text
                  variant={props?.dialogTitleVariant ?? 'title'}
                  numberOfLines={props?.numberOfLinesForTitle}
                  style={props?.dialogTitleStyle}
                >
                  {props?.title}
                </Text>
                {!props?.hideDialogTitleDivider && (
                  <Divider
                    color={
                      props?.titleDividerColor ?? colors?.onSurfaceDisabled
                    }
                  />
                )}
              </RNView>
            )}
            {props?.children && (
              <RNView
                style={[
                  styles?.dialogContentContainer,
                  props?.dialogContentContainerStyle,
                ]}
              >
                {props?.children}
              </RNView>
            )}
            {(props?.onPressAccept || props?.onPressReject) && (
              <RNView
                style={[styles?.actionContainer, props?.actionContainerStyle]}
              >
                {!props?.hideActionContainerDivider && (
                  <Divider
                    color={
                      props?.actionDividerColor ?? colors?.onSurfaceDisabled
                    }
                  />
                )}
                {props?.customAction ?? (
                  <RNView
                    style={[styles?.actionContent, props?.actionContentStyle]}
                  >
                    {!props?.hideAccept && props?.onPressAccept && (
                      <Button
                        containerStyle={[
                          styles?.actionButtonContainer,
                          props?.actionButtonContainerStyle,
                        ]}
                        titleStyle={[
                          styles?.actionButtonTitle,
                          props?.actionButtonTitleStyle,
                        ]}
                        title={props?.acceptText ?? 'Accept'}
                        onPress={props?.onPressAccept}
                      />
                    )}
                    {!props?.hideReject && props?.onPressReject && (
                      <Button
                        containerStyle={[
                          styles?.actionButtonContainer,
                          props?.actionButtonContainerStyle,
                        ]}
                        titleStyle={[
                          styles?.actionButtonTitle,
                          props?.actionButtonTitleStyle,
                        ]}
                        title={props?.rejectText ?? 'Reject'}
                        onPress={props?.onPressReject}
                      />
                    )}
                  </RNView>
                )}
              </RNView>
            )}
            {!props?.hideClose && (
              <IconButton
                containerStyle={styles?.closeIconContainer}
                onPress={props?.onDismiss}
              >
                <Ionicons
                  name="close-circle-sharp"
                  size={responsive.size(32)}
                  color={colors?.error}
                />
              </IconButton>
            )}
          </RNView>
        </RNPressable>
      </RNModal>
    </Fragment>
  );
}

function makeStyle({ colors }: MakeStyles) {
  const styles = RNStyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors?.backdrop,
      flex: 1,
      justifyContent: 'center',
      paddingVertical: responsive.size(15),
    },
    content: {
      backgroundColor: colors?.background,
      borderRadius: responsive.size(10),
      paddingHorizontal: responsive.size(20),
      paddingVertical: responsive.height(25),
      width: '90%',
    },
    closeIconContainer: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
    dialogTitleContainer: {
      paddingTop: responsive.height(10),
      rowGap: responsive.height(10),
    },
    dialogContentContainer: {
      paddingVertical: responsive.height(15),
    },
    actionContainer: {
      paddingTop: responsive.height(10),
      rowGap: responsive.height(15),
    },
    actionContent: {
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: responsive.size(10),
      justifyContent: 'flex-end',
    },
    actionButtonContainer: {
      minWidth: responsive.size(80),
      paddingVertical: responsive.height(5),
    },
    actionButtonTitle: {
      fontSize: responsive.size(16),
    },
  });

  return styles;
}

export type { DialogProps };
export { Dialog };
