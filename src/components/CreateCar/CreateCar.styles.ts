import {sizes} from '@constants';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  dropdown1BtnStyle: ViewStyle;
  dropdown1DropdownStyle: ViewStyle;
  dropdown1RowStyle: ViewStyle;

  inputLabel: TextStyle;
  dropdown1BtnTxtStyle: TextStyle;
  dropdown1RowTxtStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: sizes.marginHorizontal,
  },
  inputLabel: {
    paddingLeft: sizes.l,
    paddingBottom: 4,
    paddingTop: sizes.s,
  },
  dropdown1BtnStyle: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 57,
    paddingHorizontal: sizes.l,
  },
  dropdown1BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontSize: sizes.l,
  },
  dropdown1DropdownStyle: {
    marginTop: 4,
    borderRadius: 8,
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontSize: sizes.m,
  },
});
