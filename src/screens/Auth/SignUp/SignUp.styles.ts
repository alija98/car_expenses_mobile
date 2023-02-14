import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizes} from '../../../constants';

interface Style {
  container: ViewStyle;
  bottomContainer: ViewStyle;
  animationContainer: ViewStyle;

  title: TextStyle;
  signUpTxt: TextStyle;
  link: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    display: 'flex',
  },
  bottomContainer: {
    backgroundColor: colors.gray,
    height: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: sizes.marginHorizontal,
    paddingTop: sizes.l,
    marginTop: 44,
  },

  title: {
    fontSize: sizes.title,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  signUpTxt: {
    textAlign: 'center',
    marginTop: 102,
    fontSize: 15,
  },
  link: {
    color: colors.primaryBlue,
  },
  animationContainer: {
    marginTop: 24,
    width: '100%',
    height: 200,
  },
});
