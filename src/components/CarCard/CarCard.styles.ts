import {sizes} from '@constants';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  imgWrapper: ViewStyle;
  info: ViewStyle;

  img: ImageStyle;

  carBrand: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 2,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  imgWrapper: {
    width: '100%',
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
    height: 160,
  },
  info: {
    flex: 1,
    paddingVertical: sizes.m,
  },
  carBrand: {
    fontSize: sizes.l,
    fontWeight: '600',
  },
});

export default styles;
