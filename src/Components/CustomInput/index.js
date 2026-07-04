import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  placeholderTextColor,
  additionalStyle,
  secureTextEntry,
  cursorColor,
  maxLength,
  iconRight,
  iconLeft,
  editable = true,
  onBlur,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
      <View>{iconLeft}</View>
      <TextInput
        style={[styles.input, additionalStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        cursorColor={cursorColor}
        maxLength={maxLength}
        editable={editable}
        onFocus={() => {
          setIsFocused(true);
          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);
          onBlur?.();
        }}
      />
      <View>{iconRight}</View>
    </View>
  );
};

export default CustomInput;