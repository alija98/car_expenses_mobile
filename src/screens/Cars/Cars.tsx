import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

import {CarType, TEMP_CAR_1, TEMP_CAR_2} from '@utils/helpers/types/common';
import CarCard from '@components/CarCard/CarCard';
import styles from './Cars.style';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetRefProps,
} from '@components/BottomSheet/BottomSheet';
import CreateCar from '@components/CreateCar';

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};
const actions = [
  {
    text: 'Add new car',
    name: 'add_car',
    position: 1,
    icon: require('../../assets/car.png'),
  },
];

const Cars = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const ref = useRef<BottomSheetRefProps>(null);

  const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  const getCars = () => {
    setCars([TEMP_CAR_1, TEMP_CAR_2]);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarCard car={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator}
      />
      <FloatingAction
        actions={actions}
        onPressItem={() => {
          ref.current?.scrollTo(-(SCREEN_HEIGHT * 0.65));
        }}
      />
      <BottomSheet ref={ref}>
        <View style={styles.bottomSheet}>
          <CreateCar />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Cars;
