import {colors} from '@constants';
import React, {Ref} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyType,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
  ViewStyle,
} from 'react-native';
import styles from './CustomInput.styles';

interface Props {
  value: string;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyType;
  inputRef?: Ref<TextInput>;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  error?: string;
  required?: boolean;
  marginTop?: number;
  disabled?: boolean;
  onChangeText?: (value: string, type: string) => void;
  onChangeTextType?: string;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onSubmitEditing?: () => void;
  onPressIn?: () => void;
  icon?: React.ReactNode;
  iconPaddingLeft?: number;
  width?: string | number;
  marginLeft?: number;
  marginBottom?: number;
  autoFocus?: boolean;
  backgroundColor?: string;
  paddingHorizontal?: number;
  testID?: string;
  inputStyles?: ViewStyle;
  rightIcon?: React.ReactNode;
  textLabel?: string;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
  inputPaddingRight?: number;
  maxLength?: number;
  textColor?: string;
}

const CustomInput = ({
  value,
  placeholder,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
  returnKeyType,
  inputRef,
  autoCapitalize,
  error,
  required,
  marginTop,
  disabled,
  onChangeText,
  onFocus,
  onBlur,
  onSubmitEditing,
  onPressIn,
  icon,
  iconPaddingLeft,
  width,
  marginLeft,
  autoFocus,
  backgroundColor,
  paddingHorizontal,
  testID,
  inputStyles = {},
  rightIcon,
  textLabel,
  textAlign,
  inputPaddingRight,
  maxLength,
  textColor,
  onChangeTextType = '',
}: Props) => {
  return (
    <>
      {textLabel ? <Text style={styles.textLabel}>{textLabel}</Text> : null}
      <View
        style={[
          styles.container,
          !icon && !rightIcon && styles.containerWithoutIcon,
          marginTop ? {marginTop} : null,
          width ? {width} : {},
          marginLeft ? {marginLeft} : {},
          backgroundColor ? {backgroundColor} : {},
          paddingHorizontal || paddingHorizontal === 0
            ? {paddingHorizontal}
            : {},
        ]}>
        {icon && (
          <View
            style={[
              styles.iconContainer,
              iconPaddingLeft ? {paddingLeft: iconPaddingLeft} : {},
            ]}>
            {icon}
          </View>
        )}
        {required && <Text style={styles.requiredStar}>*</Text>}
        <TextInput
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          style={[
            styles.textInput,
            !icon && styles.textInputWithoutIcon,
            inputStyles,
            textAlign ? {textAlign} : {},
            inputPaddingRight ? {paddingRight: inputPaddingRight} : {},
            textColor ? {color: textColor} : {},
          ]}
          numberOfLines={1}
          placeholderTextColor={placeholderTextColor || colors.text2}
          editable={!disabled}
          onChangeText={e => onChangeText && onChangeText(e, onChangeTextType)}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          onPressIn={onPressIn}
          autoFocus={autoFocus}
          testID={testID}
        />
        {rightIcon && (
          <View style={styles.rightIconContainer}>{rightIcon}</View>
        )}
      </View>
      {error ? (
        <Text
          style={[
            styles.textInputError,
            paddingHorizontal ? {paddingHorizontal} : {},
          ]}>
          {error}
        </Text>
      ) : null}
    </>
  );
};

export default CustomInput;
