import { StyleSheet } from 'react-native';
import { FONTS } from '../../../Assets/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontFamily: FONTS.Comfortaa_Bold,
    fontSize: 24,
    textAlign: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 50,
  },
  Verifytitle: {
    fontFamily: FONTS.Comfortaa_SemiBold,
    fontSize: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: FONTS.Comfortaa_Regular,
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginTop: 10,
  },
  email: {
    fontFamily: FONTS.Comfortaa_Bold,
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  textInputContainer: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
  },
  btnExtra:{
    width: "100%",
    backgroundColor: '#1a6fd8',
    marginTop: 30,
  },
  btnTextExtra:{
    color: 'white',
    fontFamily: FONTS.Comfortaa_Bold,
    fontSize: 16,
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
