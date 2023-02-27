import {colors, sizes} from '@constants';
import {TextStyle, StyleSheet, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  containerWithoutIcon: ViewStyle;
  iconContainer: ViewStyle;
  requiredStar: TextStyle;
  textInput: TextStyle;
  textInputWithoutIcon: TextStyle;
  rightIconContainer: ViewStyle;
  textInputError: TextStyle;
  textLabel: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 57,
    paddingHorizontal: 25,
  },
  containerWithoutIcon: {
    alignItems: 'flex-start',
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    paddingLeft: 25,
  },
  requiredStar: {
    position: 'absolute',
    top: 15,
    left: 15,
    color: colors.accentDark,
  },
  textInput: {
    fontSize: sizes.m,
    letterSpacing: 0.02,
    color: colors.text1,
    textAlign: 'center',
    flex: 1,
    marginLeft: 24,
    paddingRight: 30,
    height: '100%',
  },
  textInputWithoutIcon: {
    marginLeft: 0,
    paddingRight: 0,
    textAlign: 'left',
  },
  rightIconContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: 25,
  },
  textInputError: {
    color: colors.error,
    fontSize: sizes.s,
    paddingHorizontal: 25,
    paddingTop: 4,
  },
  textLabel: {
    fontSize: sizes.s,
    color: colors.text2,
    letterSpacing: 0.1,
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
});
