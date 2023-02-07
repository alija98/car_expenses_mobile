import {colors} from '@constants';
import {isAndroid} from '@utils/helpers/isAndroid';
import React, {ReactNode} from 'react';
import {ViewStyle, Pressable, View} from 'react-native';
import styles from './Touchable.styles';

const PRESSED_OPACITY_IOS = 0.2;

interface Props {
  children: ReactNode;
  rippleColor?: string;
  style?: ViewStyle | {};
  hitSlop?: Object;
  disabled?: boolean;
  disabledColor?: string;
  marginRight?: number;
  rippleInBorders?: boolean;
  onPress: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  props?: Object;
}

const CTouchable = ({
  children,
  rippleColor,
  style,
  hitSlop = {},
  disabled,
  disabledColor,
  marginRight,
  rippleInBorders = false,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  props,
}: Props) => (
  <>
    {!rippleInBorders ? (
      <Pressable
        {...props}
        android_ripple={{
          color: rippleColor || colors.defaultRipple,
          borderless: false,
        }}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={({pressed}) => [
          {opacity: !isAndroid() && pressed ? PRESSED_OPACITY_IOS : 1},
          style,
          marginRight ? {marginRight} : {},
          disabled && disabledColor && {backgroundColor: disabledColor},
        ]}
        hitSlop={hitSlop}
        onLongPress={onLongPress}
        disabled={disabled}>
        {children}
      </Pressable>
    ) : (
      <View style={[styles.touchableParent, marginRight ? {marginRight} : {}]}>
        <Pressable
          {...props}
          android_ripple={{
            color: rippleColor || colors.defaultRipple,
            borderless: false,
          }}
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={({pressed}) => [
            {opacity: !isAndroid() && pressed ? PRESSED_OPACITY_IOS : 1},
            style,
            disabled && disabledColor && {backgroundColor: disabledColor},
          ]}
          hitSlop={hitSlop}
          onLongPress={onLongPress}
          disabled={disabled}>
          {children}
        </Pressable>
      </View>
    )}
  </>
);

export default CTouchable;
