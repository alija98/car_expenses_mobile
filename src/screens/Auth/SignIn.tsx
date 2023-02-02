import {Text, StatusBar, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants/colors';
import {AuthStackParamList} from '../../types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />
      <Text>SignIn</Text>
      <Button onPress={() => navigation.navigate('SignUp')} title="signUP" />
    </SafeAreaView>
  );
};

export default SignIn;
