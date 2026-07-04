import { StyleSheet } from "react-native";
import { FONTS } from "../../Assets/Themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: '#ccc',
    width: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.Comfortaa_Bold,
    color: '#111',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: FONTS.Comfortaa_Regular,
    color: 'gray',
    marginBottom: 15,
    textAlign: 'center',
    marginHorizontal: 20
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.Comfortaa_SemiBold,
    color: '#333',
    marginBottom: 6,
  },
  btn: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#1a6fd8',
    marginTop: 16,
  },
  cancelBtn: {
    alignItems: 'center',
    marginTop: 15,
  },
  cancelText: {
    color: 'gray',
    fontSize: 14,
    fontFamily: FONTS.Comfortaa_Regular,
  },
});
export default styles;