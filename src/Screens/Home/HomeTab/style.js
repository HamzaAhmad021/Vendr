import { StyleSheet, Dimensions } from 'react-native';
import { FONTS } from '../../../Assets/Themes';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text:{
    fontSize: 25,
    fontFamily: FONTS.Comfortaa_Bold,
    textAlign: 'center',
    marginTop: 20,
  },
  headerContainer:{
    backgroundColor: '#1a6fd8',
    height: height * 0.3,
    width: width,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  }
});
export default styles;
