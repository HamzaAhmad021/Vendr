import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../Assets/Themes';

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 35,
    
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.Comfortaa_Bold,
  },

});

export default styles;
