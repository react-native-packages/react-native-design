import React from 'react';
import type { PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import type {
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
  TextStyle as RNTextStyle,
  ColorValue,
} from 'react-native';

import type { ModalAnimationType, TestProps } from '../types/props';
import { Text, type TextVariant } from './Text';
import { responsive } from '../helpers';
import { colors } from '../themes/appColors';
import { IconButton } from './IconButton';
import { Ionicons } from './icons';
import { Divider } from './dividers';
import { Button } from './Button';

interface DialogProps extends TestProps {
  isVisible?: boolean;
  onDismiss?: () => void;
  isCollapsable?: boolean;
  rootStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  title?: string;
  transparent?: boolean;
  animationType?: ModalAnimationType;
  onRequestClose?: (event: NativeSyntheticEvent<any>) => void;
  dialogTitleContainerStyle?: StyleProp<ViewStyle>;
  dialogTitleStyle?: StyleProp<RNTextStyle>;
  dialogTitleVariant?: TextVariant;
  hideDialogTitleDivider?: boolean;
  dialogContentContainerStyle?: StyleProp<ViewStyle>;
  titleDividerColor?: ColorValue;
  actionDividerColor?: ColorValue;
  actionContainerStyle?: StyleProp<ViewStyle>;
  hideActionContainerDivider?: boolean;
  actionContentStyle?: StyleProp<ViewStyle>;
  acceptText?: string;
  onPressAccept?: () => void;
  rejectText?: string;
  onPressReject?: () => void;
  actionButtonContainerStyle?: StyleProp<ViewStyle>;
  actionButtonTitleStyle?: StyleProp<RNTextStyle>;
  numberOfLinesForTitle?: number;
}

function Dialog(props: PropsWithChildren<DialogProps>) {
  return (
    <>
      <Modal
        visible={props?.isVisible}
        onDismiss={props?.onDismiss}
        collapsable={props?.isCollapsable}
        transparent={props?.transparent}
        animationType={props?.animationType}
        onRequestClose={props?.onRequestClose}
        style={props?.rootStyle}
      >
        <Pressable
          style={[styles?.container, props?.containerStyle]}
          onPress={props?.isCollapsable ? props?.onDismiss : null}
        >
          <View style={[styles?.content, props?.contentStyle]}>
            {props?.title && (
              <View
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
                      props?.titleDividerColor ?? colors?.grey?.light?.main
                    }
                  />
                )}
              </View>
            )}
            {props?.children && (
              <View
                style={[
                  styles?.dialogContentContainer,
                  props?.dialogContentContainerStyle,
                ]}
              >
                {props?.children}
              </View>
            )}
            {(props?.onPressAccept || props?.onPressReject) && (
              <View
                style={[styles?.actionContainer, props?.actionContainerStyle]}
              >
                {!props?.hideActionContainerDivider && (
                  <Divider
                    color={
                      props?.actionDividerColor ?? colors?.grey?.light?.main
                    }
                  />
                )}
                <View
                  style={[styles?.actionContent, props?.actionContentStyle]}
                >
                  {props?.onPressAccept && (
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
                  {props?.onPressReject && (
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
                </View>
              </View>
            )}
            <IconButton
              containerStyle={styles?.closeIconContainer}
              onPress={props?.onDismiss}
            >
              <Ionicons
                name="close-circle-sharp"
                size={responsive.size(32)}
                color={colors?.red?.normal?.main}
              />
            </IconButton>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors?.black?.normal?.shadow40,
    borderRadius: responsive.size(10),
    flex: 1,
    justifyContent: 'center',
    paddingVertical: responsive.size(15),
  },
  content: {
    backgroundColor: colors?.white?.normal?.main,
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

export type { DialogProps };
export { Dialog };
