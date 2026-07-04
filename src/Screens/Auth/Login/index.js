import React, { useState, useRef, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePath from '../../../Assets/Image/ImagePath';
import CustomInput from '../../../Components/CustomInput';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import CustomButton from '../../../Components/CustomButton';
import { NAVIGATION_ROUTES } from '../../../Navigations/NavigationRoutes';
import CustomBottomSheet from '../../../Components/CustomBottomSheet';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const bottomSheetRef = useRef(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.innerContainer}>
          <Image source={ImagePath.Ventura} style={styles.logo} />
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subtitle}>Welcome back you've been missed!</Text>
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <CustomInput
              iconLeft={
                <Ionicons name="person-outline" size={20} color="gray" />
              }
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              additionalStyle={styles.inputExtra}
              placeholderTextColor={'lightgrey'}
              cursorColor={'#1a6fd8'}
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
          <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
            <CustomButton
              title="Sign in"
              extraStyle={styles.btnExtra}
              textStyle={styles.btnTextExtra}
            />
            <View style={styles.accountContainer}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(NAVIGATION_ROUTES.SIGNUP)}
              >
                <Text style={styles.signUpText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
          <CustomBottomSheet ref={bottomSheetRef} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Login;
