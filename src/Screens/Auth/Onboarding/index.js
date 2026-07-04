import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ImagePath from '../../../Assets/Image/ImagePath';
import styles from './style';
import CustomButton from '../../../Components/CustomButton';
import { NAVIGATION_ROUTES } from '../../../Navigations/NavigationRoutes';
import { COLORS } from '../../../Assets/Themes';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: 'Turn Your Unused Stuff Into Cash',
    description:
      'Easy shopping for all your needs just in hand trusted by thousands of people in Pakistan.',
    image: ImagePath.Payment,
  },
  {
    id: 2,
    title: 'One best app for all you need',
    description:
      'Easy shopping for all your needs just in hand trusted by thousands of people in Pakistan.',
    image: ImagePath.Cart,
  },
  {
    id: 3,
    title: 'Everything you need all in one app',
    description:
      'Easy shopping for all your needs just in hand trusted by thousands of people in Pakistan.',
    image: ImagePath.Car,
  },
];

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const isLastSlide = currentIndex === slides.length - 1;

  const handleContinue = () => {
    if (isLastSlide) {
      navigation.navigate(NAVIGATION_ROUTES.LOGIN);
    } else {
      carouselRef.current?.next();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        ref={carouselRef}
        width={width}
        height={height * 0.6}
        data={slides}
        loop={false}
       // scrollAnimationDuration={600}
        onSnapToItem={setCurrentIndex}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        <Text style={styles.description}>
          {slides[currentIndex].description}
        </Text>
        <View style={styles.dotsRow}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <CustomButton
          title={isLastSlide ? 'Get Started' : 'Continue'}
          textStyle={styles.btnText}
          extraStyle={styles.btn}
          onPress={handleContinue}
        />

        <View style={styles.registerRow}>
          <Text style={styles.registerText}>
            By tapping “Get Started” and using the Vendr app, you’re
            agreeing to our <Text style={styles.link}>term of service</Text> and{' '}
            <Text style={styles.link}>privacy policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
