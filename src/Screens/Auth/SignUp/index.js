import React, { useState, useRef, useCallback, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePath from '../../../Assets/Image/ImagePath';
import CustomInput from '../../../Components/CustomInput';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import CustomButton from '../../../Components/CustomButton';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { NAVIGATION_ROUTES } from '../../../Navigations/NavigationRoutes';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={ImagePath.Ventura} style={styles.logo} />
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Create your account to start explore.
        </Text>
        <View>
          <Text style={styles.inputLabel}>Email</Text>
          <CustomInput
            iconLeft={<Ionicons name="person-outline" size={20} color="gray" />}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            additionalStyle={styles.inputExtra}
            placeholderTextColor={'lightgrey'}
            cursorColor={'#1a6fd8'}
          />
          <Text style={styles.inputLabel}>Phone Number</Text>
          <CustomInput
            iconLeft={<MaterialIcons name="phone" size={20} color="gray" />}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            additionalStyle={styles.inputExtra}
            placeholderTextColor={'lightgrey'}
            cursorColor={'#1a6fd8'}
            keyboardType={'numeric'}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <CustomInput
            iconLeft={
              <Ionicons name="lock-closed-outline" size={20} color="gray" />
            }
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            additionalStyle={styles.inputExtra}
            secureTextEntry={!isPasswordVisible}
            placeholderTextColor={'lightgrey'}
            cursorColor={'#1a6fd8'}
            iconRight={
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Ionicons
                  name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            }
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
        <CustomButton
          title="Create Account"
          extraStyle={styles.btnExtra}
          textStyle={styles.btnTextExtra}
          onPress={() => navigation.navigate(NAVIGATION_ROUTES.OTP)}
        />
        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATION_ROUTES.LOGIN)}
          >
            <Text style={styles.signUpText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
