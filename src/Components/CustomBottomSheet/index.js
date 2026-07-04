import React, { useCallback, forwardRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import Ionicons from '@react-native-vector-icons/ionicons';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import styles from './style';
import { FONTS } from '../../Assets/Themes';

const CustomBottomSheet = forwardRef(({ onClose }, ref) => {
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const snapPoints = ['40%']; // you can adjust these as needed

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.6}
        pressBehavior="close"
      />
    ),
    [],
  );

  const handleSend = () => {
    if (!forgotPasswordEmail) return;
    // your reset logic here
    console.log('Reset link sent to:', forgotPasswordEmail);
    ref.current?.close();
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1} // -1 = hidden on mount
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.indicator}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Enter your email and we'll send you a reset link.
        </Text>

        <Text style={styles.label}>Email</Text>
        <CustomInput
          iconLeft={<Ionicons name="mail-outline" size={20} color="gray" />}
          placeholder="Enter your email"
          value={forgotPasswordEmail}
          onChangeText={setForgotPasswordEmail}
          placeholderTextColor="lightgrey"
          cursorColor="#1a6fd8"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomButton
          title="Send Reset Link"
          onPress={handleSend}
          extraStyle={styles.btn}
        />

        <TouchableOpacity
          onPress={() => ref.current?.close()}
          style={styles.cancelBtn}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default CustomBottomSheet;
