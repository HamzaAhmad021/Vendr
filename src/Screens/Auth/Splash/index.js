import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions, Image } from 'react-native';
import styles from './style';
import { FONTS } from '../../../Assets/Themes';
import ImagePath from '../../../Assets/Image/ImagePath';
import { NAVIGATION_ROUTES } from '../../../Navigations/NavigationRoutes';
const { width, height } = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  const scale1 = useRef(new Animated.Value(0.5)).current;
  const scale2 = useRef(new Animated.Value(0.5)).current;
  const scale3 = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(scale2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(scale3, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace(NAVIGATION_ROUTES.ONBOARDING);
      }, 700);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ellipseTopRight,
          {
            width: Animated.multiply(scale1, width * 1.1),
            height: Animated.multiply(scale1, width * 1.1),
            borderRadius: Animated.multiply(scale1, (width * 1.1) / 2),
          },
          console.log('scale1:', scale1),
        ]}
      />
      <Animated.View
        style={[
          styles.ellipseBottomLeft,
          {
            width: Animated.multiply(scale2, width * 1.3),
            height: Animated.multiply(scale2, width * 1.3),
            borderRadius: Animated.multiply(scale2, (width * 1.3) / 2),
          },
        ]}
      />
      <Animated.View
        style={[
          styles.ellipseCenterRight,
          {
            width: Animated.multiply(scale3, width * 0.8),
            height: Animated.multiply(scale3, width * 0.8),
            borderRadius: Animated.multiply(scale3, (width * 0.8) / 2),
          },
        ]}
      />
      <View style={styles.centerContent}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ImagePath.Logo} style={styles.logoImage} />
          <Text style={styles.logo}>vend</Text>
          <Text
            style={[
              styles.logo,
              {
                fontFamily: FONTS.Baumans_Regular,
                fontSize: 45,
                marginTop: width * 0.01,
              },
            ]}
          >
            r
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SplashScreen;
