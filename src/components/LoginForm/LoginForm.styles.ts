import {colors, sizes} from '@constants';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  input: ViewStyle;
  submitBtn: ViewStyle;

  submitTxt: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    alignSelf: 'center',
    width: '80%',
    gap: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  submitBtn: {
    width: '100%',
    marginTop: sizes.xl,
    backgroundColor: colors.primaryBlue,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitTxt: {
    color: colors.primary,
  },
});
