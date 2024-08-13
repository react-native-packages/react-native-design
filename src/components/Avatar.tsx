import React, { useState } from 'react';
import {
  Image as RNImage,
  StyleSheet as RNStyleSheet,
  View as RNView,
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
import type { MaterialIconName } from './icons';
import { ShadowEffect } from './../animations';
import type { AvatarSize, MakeStyles } from './../types';

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
}

function Avatar(props: AvatarProps) {
  const sizeProp: AvatarSize = props?.size ?? 'medium';

  const { colors } = useAppTheme();

  const styles = makeStyles({
    colors,
    height: props?.height,
    width: props?.width,
    size: sizeProp,
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

  const { height } = getAvatarSize(sizeProp);

  return (
    <ShadowEffect containerStyle={styles?.shadowContainer}>
      <RNView style={[styles?.container, props?.containerStyle]}>
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
            size={height}
            color={colors?.background}
          />
        )}
      </RNView>
    </ShadowEffect>
  );
}

interface GetAvatarSizeReturns {
  height: number;
  width: number;
}

function getAvatarSize(size: AvatarSize): GetAvatarSizeReturns {
  switch (size) {
    case 'small':
      return {
        height: responsive?.height(20),
        width: responsive?.size(20),
      };

    case 'medium':
      return {
        height: responsive?.height(45),
        width: responsive?.size(45),
      };

    case 'large':
      return {
        height: responsive?.height(75),
        width: responsive?.size(75),
      };

    case 'x-large':
      return {
        height: responsive?.height(90),
        width: responsive?.size(90),
      };

    case 'xx-large':
      return {
        height: responsive?.height(120),
        width: responsive?.size(120),
      };

    case 'xxx-large':
      return {
        height: responsive?.height(180),
        width: responsive?.size(180),
      };
    default:
      return {
        height: responsive?.height(45),
        width: responsive?.size(45),
      };
  }
}

interface CustomMakeStyles extends MakeStyles {
  height?: number;
  width?: number;
  size: AvatarSize;
}

function makeStyles({
  colors,
  height: defaultHeight,
  width: defaultWidth,
  size,
}: CustomMakeStyles) {
  const { height, width } = getAvatarSize(size);

  const styles = RNStyleSheet.create({
    shadowContainer: {
      borderRadius: responsive?.size(90),
    },
    container: {
      alignItems: 'center',
      backgroundColor: colors?.onSurfaceDisabled,
      borderRadius: responsive?.size(90),
      justifyContent: 'center',
      height: defaultHeight ?? height,
      width: defaultWidth ?? width,
    },
    picture: {
      height: defaultHeight ?? height,
      width: defaultWidth ?? width,
      borderRadius: responsive?.size(height / 2),
    },
    nameSign: {
      fontSize: defaultHeight
        ? responsive?.size(defaultHeight / 2)
        : responsive?.size(height / 2),
      color: colors?.background,
    },
  });

  return styles;
}

export type { AvatarProps };
export { Avatar };
