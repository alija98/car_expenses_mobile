import {colors, sizes} from '@constants';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  addImg: ViewStyle;
  img: ImageStyle;

  addImgTxt: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: sizes.marginHorizontal,
  },
  addImg: {
    backgroundColor: 'blue',
    marginVertical: sizes.l,
    padding: sizes.s,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    width: 200,
    borderRadius: 6,
  },
  addImgTxt: {
    color: colors.primary,
  },

  img: {
    width: 100,
    height: 100,
  },
});
