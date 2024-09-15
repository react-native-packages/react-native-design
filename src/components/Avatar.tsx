import React, { useState } from 'react';
import {
  Pressable as RNPressable,
  Image as RNImage,
  StyleSheet as RNStyleSheet,
} from 'react-native';
import { responsive, splitString } from '@rnpack/utils';

import type {
  ImageErrorEventData,
  NativeSyntheticEvent,
  ImageStyle as RNImageStyle,
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { useAppTheme } from './../hooks';
import { Text } from './Text';
import { MaterialIcons } from './icons';
import { ShadowEffect } from './../animations';
import type { MaterialIconName } from './icons';
import type { AvatarShape, AvatarSize, MakeStyles } from './../types';

interface AvatarProps {
  picture?: string;
  name?: string;
  iconSize?: number;
  iconName?: MaterialIconName;
  pictureStyle?: RNStyleProp<RNImageStyle>;
  nameSignStyle?: RNStyleProp<RNTextStyle>;
  containerStyle?: RNStyleProp<RNViewStyle>;
  height?: number;
  width?: number;
  size?: AvatarSize;
  shape?: AvatarShape;
  onPress?: () => void;
}

function Avatar(props: AvatarProps) {
  const sizeProp: AvatarSize = props?.size ?? 'medium';
  const shapeProp: AvatarShape = props?.shape ?? 'circle';

  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    height: props?.height,
    width: props?.width,
    size: sizeProp,
    shape: shapeProp,
  });

  const [isValidPicture, setIsValidPicture] = useState<boolean>(true);

  function getNameSign(name: string): string {
    const names: Array<string> = splitString(name?.toLowerCase(), ' ');

    const signs: Array<string> = [];

    names?.forEach((part) => signs?.push(part?.charAt(0)));

    return signs?.join('')?.toUpperCase();
  }

  function onPictureLoadError(
    error: NativeSyntheticEvent<ImageErrorEventData>
  ) {
    const date = new Date(error?.timeStamp);
    console.error('Profile picture load error: ', date?.toLocaleString());

    setIsValidPicture(false);
  }

  const avatarSize = getAvatarSize(sizeProp);

  return (
    <ShadowEffect containerStyle={styles?.shadowContainer}>
      <RNPressable
        style={[styles?.container, props?.containerStyle]}
        onPress={props?.onPress}
      >
        {props?.picture && isValidPicture ? (
          <RNImage
            source={{ uri: props?.picture }}
            style={[styles?.picture, props?.pictureStyle]}
            onError={onPictureLoadError}
          />
        ) : props?.name ? (
          <Text
            variant="title"
            style={[styles?.nameSign, props?.nameSignStyle]}
          >
            {getNameSign(props?.name)}
          </Text>
        ) : (
          <MaterialIcons
            name={props?.iconName ?? 'account-circle'}
            size={props?.iconSize ?? avatarSize}
            color={colors?.background}
          />
        )}
      </RNPressable>
    </ShadowEffect>
  );
}

function getAvatarSize(size: AvatarSize): number {
  const defaultSize = responsive?.size(45);

  switch (size) {
    case 'small':
      return responsive?.size(20);

    case 'medium':
      return defaultSize;

    case 'large':
      return responsive?.size(75);

    case 'x-large':
      return responsive?.size(90);

    case 'xx-large':
      return responsive?.size(120);

    case 'xxx-large':
      return responsive?.size(180);

    default:
      return defaultSize;
  }
}

interface CustomMakeStyles extends MakeStyles {
  height?: number;
  width?: number;
  size: AvatarSize;
  shape: AvatarShape;
}

function getAvatarBorderRadius(shape: AvatarShape, size: AvatarSize) {
  switch (shape) {
    case 'rect':
      return responsive?.size(10);

    case 'rect-sharp':
      return 0;

    case 'round':
      return responsive?.size(getAvatarSize(size) / 4);

    case 'circle':
      return responsive?.size(1000);
  }
}

function makeStyles({
  colors,
  height: defaultHeight,
  width: defaultWidth,
  size,
  shape,
}: CustomMakeStyles) {
  const avatarSize = getAvatarSize(size);

  const styles = RNStyleSheet.create({
    shadowContainer: {
      borderRadius: getAvatarBorderRadius(shape, size),
    },
    container: {
      alignItems: 'center',
      backgroundColor: colors?.onSurfaceDisabled,
      borderRadius: getAvatarBorderRadius(shape, size),
      justifyContent: 'center',
      height: defaultHeight ?? avatarSize,
      width: defaultWidth ?? avatarSize,
    },
    picture: {
      height: defaultHeight ?? avatarSize,
      width: defaultWidth ?? avatarSize,
      borderRadius: getAvatarBorderRadius(shape, size),
    },
    nameSign: {
      fontSize: defaultHeight
        ? responsive?.size(defaultHeight / 2)
        : responsive?.size(avatarSize / 2),
      color: colors?.background,
    },
  });

  return styles;
}

export type { AvatarProps };
export { Avatar };
