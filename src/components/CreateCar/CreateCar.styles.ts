import {colors, sizes} from '@constants';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  dropdown1BtnStyle: ViewStyle;
  dropdown1DropdownStyle: ViewStyle;
  dropdown1RowStyle: ViewStyle;
  addButton: ViewStyle;
  addButtonDisabled: ViewStyle;
  placeholder: ViewStyle;

  inputLabel: TextStyle;
  dropdown1BtnTxtStyle: TextStyle;
  dropdown1RowTxtStyle: TextStyle;
  addButtonTxt: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
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
  addButton: {
    backgroundColor: colors.primaryBlue,
    width: 120,
    marginTop: sizes.l,
    alignSelf: 'flex-end',
    paddingHorizontal: sizes.s,
    paddingVertical: sizes.xs,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.xxs,
  },
  addButtonDisabled: {
    backgroundColor: colors.primaryBlueDisabled,
  },
  addButtonTxt: {
    color: colors.primary,
  },
  placeholder: {
    height: 330,
  },
});
