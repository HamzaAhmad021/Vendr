import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FONTS } from '../../../Assets/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a6fd8',
    overflow: 'hidden',
  },
  ellipseTopRight: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: -width * 0.4,
    right: -width * 0.3,
  },
  ellipseBottomLeft: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.06)',
    bottom: -width * 0.4,
    left: -width * 0.4,
  },
  ellipseCenterRight: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: height * 0.25,
    right: -width * 0.25,
  },
  centerContent: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontFamily: FONTS.Comfortaa_Bold,
    letterSpacing: 2,
  },
  logoImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
export default styles;
