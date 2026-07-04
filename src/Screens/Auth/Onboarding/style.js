import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../Assets/Themes';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.75,
    height: height * 0.45,
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 25,
    color: COLORS.black,
    fontFamily: FONTS.Comfortaa_Bold,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: FONTS.Comfortaa_Medium,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  dotsRow: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: 2,
  },
  dotActive: {
    width: 25,
    height: 8,
    backgroundColor: '#1a6fd8',
  },
  dotInactive: {
    width: 6,
    height: 6,
    backgroundColor: '#C4C4C4',
  },
  btn: {
    backgroundColor: '#1a6fd8',
    width: '100%',
    //marginTop: 10,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.Comfortaa_Regular,
  },
  registerRow: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    
  },
  registerText: {
    color: COLORS.black,
    fontSize: 11,
    fontFamily: FONTS.Comfortaa_Regular,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  link:{
    color: '#EE844F',
    fontSize: 11,
    fontFamily: FONTS.Comfortaa_Regular,
    paddingHorizontal: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
});
export default styles;
