import React, {memo} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './CarCard.styles';

import {CarType} from '@utils/helpers/types/common';

type CarCardProps = {
  car: CarType;
};

const CarCard = ({car}: CarCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={{uri: car.images[0]}} style={styles.img} />
      </View>
      <View style={styles.info}>
        <Text style={styles.carBrand}>
          {car.brand}
          {' - '}
          {car.model}
        </Text>
      </View>
    </View>
  );
};

export default memo(CarCard);
