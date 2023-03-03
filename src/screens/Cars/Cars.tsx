import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

import {CarType} from '@utils/helpers/types/common';
import CarCard from '@components/CarCard/CarCard';
import styles from './Cars.style';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetRefProps,
} from '@components/BottomSheet/BottomSheet';
import CreateCar from '@components/CreateCar';
import CarsService from '../../services/carsService';

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

  const getCars = useCallback(async () => {
    try {
      const {data} = await CarsService.getCars();
      setCars(data);
    } catch (error: any) {
      console.log(error.response);
    }
  }, []);

  const scrollBottomSheet = (
    height: number,
    shouldRefreshCars: boolean = false,
  ) => {
    ref.current?.scrollTo(height);
    shouldRefreshCars && getCars();
  };

  useEffect(() => {
    getCars();
  }, [getCars]);

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
          scrollBottomSheet(-(SCREEN_HEIGHT * 0.65));
        }}
      />
      <BottomSheet ref={ref}>
        <View style={styles.bottomSheet}>
          <CreateCar scrollBottomSheet={scrollBottomSheet} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Cars;
