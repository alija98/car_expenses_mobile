import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  touchableParent: ViewStyle;
}

export default StyleSheet.create<Style>({
  touchableParent: {
    overflow: 'hidden',
    borderRadius: 50,
    margin: 0,
  },
});
