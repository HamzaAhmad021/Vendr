import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: 'black',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
   // marginTop: 20
  },
  inputContainerFocused: {
  borderColor: '#1a6fd8',
  borderWidth: 1.5,
}
});
export default styles;
