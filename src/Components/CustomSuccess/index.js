import React, { useCallback, forwardRef, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import CustomButton from '../CustomButton';
import styles from './style';
import { FONTS } from '../../Assets/Themes';
import ImagePath from '../../Assets/Image/ImagePath';
import { NAVIGATION_ROUTES } from '../../Navigations/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const CustomSuccess = forwardRef(({ onClose }, ref) => {
  const navigation = useNavigation();

  const snapPoints = useMemo(() => ['45%'], []);

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

  const handleLoginPress = () => {
    ref.current?.close();
    onClose?.(); // if parent needs to reset index state
    navigation.navigate(NAVIGATION_ROUTES.BOTTOMNAVIGATION);
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
        <Image source={ImagePath.Success} />
        <Text style={styles.title}>Register Success</Text>
        <Text style={styles.subtitle}>
          You have been registered successfully. Please Login to continue.
        </Text>

        <CustomButton
          title="Login"
          onPress={handleLoginPress}
          extraStyle={styles.btn}
        />
      </BottomSheetView>
    </BottomSheet>
  );
});

export default CustomSuccess;
