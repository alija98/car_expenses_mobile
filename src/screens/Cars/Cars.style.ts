import {sizes} from '@constants';
import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  bottomSheet: ViewStyle;
  separator: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    padding: sizes.marginHorizontal,
    flex: 1,
  },
  bottomSheet: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  separator: {
    height: 15,
  },
});

export default styles;
