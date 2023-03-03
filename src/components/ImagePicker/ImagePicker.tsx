import Touchable from '@components/Touchable';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import styles from './ImagePicker.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '@constants';

type ImagePickerProps = {
  setSelectedImageData: (data: string | undefined) => void;
};

const ImagePicker = ({setSelectedImageData}: ImagePickerProps) => {
  const [selectedImageUri, setSelectedImageUri] = useState<string>('');

  const addImgHandler = () =>
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 560,
        maxHeight: 800,
        quality: 1,
        selectionLimit: 1,
        includeBase64: true,
      },

      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else if (response.assets) {
          setSelectedImageUri(response?.assets[0].uri as string);
          setSelectedImageData(response?.assets[0].base64);
        }
      },
    );

  return (
    <View>
      <Touchable style={styles.addImg} onPress={addImgHandler}>
        <Text style={styles.addImgTxt}>Select image</Text>
        <Icon name="photo" color={colors.primary} />
      </Touchable>
      {selectedImageUri && (
        <View>
          <Image style={styles.img} source={{uri: selectedImageUri}} />
        </View>
      )}
    </View>
  );
};

export default ImagePicker;
