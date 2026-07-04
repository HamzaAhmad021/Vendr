import { StyleSheet } from 'react-native';
import { FONTS } from '../../../Assets/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  logo: {},
  title: {
    fontSize: 22,
    fontFamily: FONTS.Comfortaa_Bold,
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.Comfortaa_Regular,
    color: 'gray',
    lineHeight: 20,
  },
  inputExtra: {},
  inputLabel: {
    fontSize: 14,
    fontFamily: FONTS.Comfortaa_SemiBold,
    color: 'black',
    marginBottom: 5,
    marginTop: 10,
  },
  forgotText: {
    fontSize: 12,
    fontFamily: FONTS.Comfortaa_Bold,
    color: '#1a6fd8',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  btnExtra: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#1a6fd8',
  },
  btnTextExtra: {
    color: 'white',
    fontFamily: FONTS.Comfortaa_Bold,
  },
  accountText: {
    fontSize: 13,
    fontFamily: FONTS.Comfortaa_Regular,
    color: 'gray',
    alignSelf: 'center',
  },
  signUpText: {
    fontSize: 13,
    fontFamily: FONTS.Comfortaa_Bold,
    color: '#1a6fd8',
    alignSelf: 'center',
    marginLeft: 5,
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
export default styles;
