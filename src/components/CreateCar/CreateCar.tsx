import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import CustomInput from '@components/CustomInput';
import styles from './CreateCar.styles';
import {EngineTypes, ENGINE_VALUES} from '@utils/helpers/types/common';
import {capitalizeFirstLetter} from '@utils/helpers/capitalizeFirstLetter';
import {colors} from '@constants';
import Touchable from '@components/Touchable';
import ImagePicker from '@components/ImagePicker';
import CarsService from '../../services/carsService';
import {showMessage} from 'react-native-flash-message';

type CreateCarProps = {
  scrollBottomSheet: (height: number, shouldRefreshCars: boolean) => void;
};

const CreateCar = ({scrollBottomSheet}: CreateCarProps) => {
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [engineType, setEngineType] = useState<EngineTypes | null>(null);
  const [yearOfProduction, setYearOfProduction] = useState<string>('');
  const [nmbrOfKm, setNmbrOfKm] = useState<string>('');
  const [registrationDate, setRegistrationDate] = useState<Date | null>(null);
  const [color, setColor] = useState('');
  const [selectedImageData, setSelectedImageData] = useState<string>();

  const isDisabled =
    carBrand.length === 0 ||
    carModel.length === 0 ||
    engineType === null ||
    yearOfProduction.length === 0 ||
    nmbrOfKm.length === 0 ||
    registrationDate === null ||
    color.length === 0 ||
    selectedImageData?.length === 0;

  const [registrationDateModalVisible, setRegistrationDateModalVisible] =
    useState(false);

  const onInputChange = (value: string, type: string) => {
    if (type === 'brand') {
      setCarBrand(value);
    } else if (type === 'model') {
      setCarModel(value);
    } else if (type === 'year') {
      setYearOfProduction(value);
    } else if (type === 'color') {
      setColor(value);
    } else if (type === 'nmbrOfKm') {
      setNmbrOfKm(value);
    }
  };

  const handleDateConfirm = (date: Date) => {
    setRegistrationDate(date);
    setRegistrationDateModalVisible(false);
  };

  const onAddCar = async () => {
    const formData = new FormData();
    formData.append('brand', carBrand);
    formData.append('model', carModel);
    formData.append('engineType', engineType);
    formData.append('registrationDate', registrationDate?.toDateString());
    formData.append('color', color);
    formData.append('yearOfProduction', yearOfProduction);
    formData.append('image', selectedImageData);
    formData.append('nmbrOfKm', nmbrOfKm);

    try {
      await CarsService.addCar(formData);
      showMessage({
        message: 'Car successfully added',
        type: 'success',
      });
      scrollBottomSheet(100, true);
    } catch (error: any) {
      console.log('error je', error.response);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={180}>
      <ImagePicker setSelectedImageData={setSelectedImageData} />
      <Text style={styles.inputLabel}>Brand</Text>
      <CustomInput
        placeholder={'e.g. Audi'}
        value={carBrand}
        onChangeText={onInputChange}
        onChangeTextType="brand"
      />
      <Text style={styles.inputLabel}>Model</Text>
      <CustomInput
        placeholder={'e.g. Q7'}
        value={carModel}
        onChangeText={onInputChange}
        onChangeTextType="model"
      />
      <Text style={styles.inputLabel}>Color</Text>
      <CustomInput
        placeholder={'e.g. Black'}
        value={color}
        onChangeText={onInputChange}
        onChangeTextType="color"
      />
      <Text style={styles.inputLabel}>Engine type</Text>
      <SelectDropdown
        data={ENGINE_VALUES.map(value => capitalizeFirstLetter(value))}
        onSelect={selectedItem => {
          setEngineType(selectedItem.toLowerCase() as EngineTypes);
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#444'}
              size={18}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
      <Text style={styles.inputLabel}>Year Of Production</Text>
      <CustomInput
        placeholder={'e.g. 2015'}
        value={yearOfProduction}
        onChangeText={onInputChange}
        onChangeTextType="year"
        keyboardType="number-pad"
      />
      <Text style={styles.inputLabel}>Kilometers traveled </Text>
      <CustomInput
        placeholder={'e.g. 60000'}
        value={nmbrOfKm}
        onChangeText={onInputChange}
        onChangeTextType="nmbrOfKm"
        keyboardType="number-pad"
      />
      <Text style={styles.inputLabel}>Registration date</Text>
      <Touchable
        rippleColor={'transparent'}
        onPress={() => setRegistrationDateModalVisible(true)}>
        <CustomInput
          value={registrationDate?.toLocaleDateString() as string}
          required={true}
          placeholder={'e.g. 2/20/2010'}
          disabled={true}
          onPressIn={() => setRegistrationDateModalVisible(true)}
        />
        <DateTimePickerModal
          isVisible={registrationDateModalVisible}
          mode="date"
          date={new Date(2023, 0, 1)}
          textColor={colors.text1}
          isDarkModeEnabled={false}
          themeVariant={'light'}
          onConfirm={handleDateConfirm}
          onCancel={() => setRegistrationDateModalVisible(false)}
          maximumDate={new Date()}
        />
      </Touchable>
      <Touchable
        disabled={isDisabled}
        style={[styles.addButton, isDisabled ? styles.addButtonDisabled : {}]}
        onPress={onAddCar}>
        <Text style={styles.addButtonTxt}>Add car</Text>
      </Touchable>
      <View style={styles.placeholder} />
    </KeyboardAwareScrollView>
  );
};

export default CreateCar;
