import {Text, SafeAreaView, StatusBar, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '@utils/helpers/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {colors} from '@constants';

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />
      <Text>SignUp</Text>
      <Button onPress={() => navigation.navigate('SignIn')} title="signIn" />
    </SafeAreaView>
  );
};

export default SignUp;
