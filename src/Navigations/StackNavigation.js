import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {NAVIGATION_ROUTES} from './NavigationRoutes';
import Splash from '../Screens/Auth/Splash';
import Onboarding from '../Screens/Auth/Onboarding';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import Otp from '../Screens/Auth/Otp';
import BottomNavigation from './BottomNavigator';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION_ROUTES.SPLASH}>
        <Stack.Screen
          name={NAVIGATION_ROUTES.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NAVIGATION_ROUTES.ONBOARDING}
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NAVIGATION_ROUTES.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NAVIGATION_ROUTES.SIGNUP}
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NAVIGATION_ROUTES.OTP}
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NAVIGATION_ROUTES.BOTTOMNAVIGATION}
          component={BottomNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;