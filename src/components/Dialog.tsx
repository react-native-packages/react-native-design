import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import type { NativeSyntheticEvent, StyleProp, ViewStyle } from 'react-native';

import type { ModalAnimationType, TestProps } from '../types/props';
import { Text } from './Text';
import { responsive } from '../helpers';
import { colors } from '../themes/appColors';

interface DialogProps extends TestProps {
  isVisible?: boolean;
  onDismiss?: () => void;
  isCollapsable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  title?: string;
  transparent?: boolean;
  animationType?: ModalAnimationType;
  onRequestClose?: (event: NativeSyntheticEvent<any>) => void;
}

function Dialog(props: DialogProps) {
  return (
    <>
      <Modal
        visible={props?.isVisible}
        onDismiss={props?.onDismiss}
        collapsable={props?.isCollapsable}
        transparent={props?.transparent}
        animationType={props?.animationType}
        onRequestClose={props?.onRequestClose}
      >
        <View style={[styles?.container, props?.containerStyle]}>
          <View style={[styles?.content, props?.contentStyle]}>
            {props?.title && (
              <View>
                <Text variant="title">{props?.title}</Text>
              </View>
            )}
          </View>
        </View>
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
    paddingHorizontal: responsive.size(20),
    paddingVertical: responsive.height(30),
    width: '90%',
  },
});

export type { DialogProps };
export { Dialog };
