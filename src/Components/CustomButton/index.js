import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { COLORS } from '../../Assets/Themes';

const CustomButton = ({
  title,
  onPress,
  extraStyle,
  textStyle,
  disabled = false,
  focused,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, extraStyle, focused]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
