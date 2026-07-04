import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import ImagePath from '../../../Assets/Image/ImagePath';
import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../../../Components/CustomButton';
import CustomSuccess from '../../../Components/CustomSuccess';

const Otp = () => {
  const [otp, setOtp] = useState('');

  const otpRef = useRef(null);
  const bottomSheetRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Verification</Text>
        <Image source={ImagePath.Otp} style={styles.image} />
        <Text style={styles.Verifytitle}>Verification Code</Text>
        <Text style={styles.subtitle}>
          We have sent a verification code to{' '}
          <Text style={styles.email}>test@gmail.com</Text>
        </Text>
        <OTPTextView
          ref={otpRef}
          handleTextChange={setOtp}
          inputCount={4}
          keyboardType="numeric"
          containerStyle={styles.textInputContainer}
          tintColor={'#1a6fd8'}
          textInputStyle={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'gray',
          }}
        />
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <CustomButton
            title="Verify"
            extraStyle={styles.btnExtra}
            textStyle={styles.btnTextExtra}
            onPress={() => bottomSheetRef.current?.expand()}
          />
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Did not receive the code?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CustomSuccess ref={bottomSheetRef} />
    </SafeAreaView>
  );
};

export default Otp;
