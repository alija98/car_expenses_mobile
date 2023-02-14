import {colors, sizes} from '@constants';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  input: ViewStyle;
  submitBtn: ViewStyle;
  paddingRight: ViewStyle;
  showHide: ViewStyle;
  positionRelative: ViewStyle;

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
  paddingRight: {
    paddingRight: 30,
  },
  showHide: {
    width: 14,
    height: 14,
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -7}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionRelative: {position: 'relative'},
});
