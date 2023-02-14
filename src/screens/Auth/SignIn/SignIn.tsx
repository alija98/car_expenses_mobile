import React from 'react';
import {Text, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {colors} from '@constants';
import {AuthStackParamList} from '@utils/helpers/types/navigation';
import styles from './SignIn.styles';
import LoginForm from '@components/SignUpInForm';
import {useState} from 'react';
import LottieView from 'lottie-react-native';
import {useAppDispatch} from '@store/store';
import {signInUser} from '@store/user';
import {SignUpInFormInputs} from '@utils/helpers/types/common';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const dispatch = useAppDispatch();

  const onValueChange = (type: SignUpInFormInputs, value: string) => {
    if (type === 'password') {
      setPassword(value);
    } else if (type === 'email') {
      setEmail(value);
    }
  };
  const onSingIn = () => {
    dispatch(signInUser({email: email, password}));
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require('../../../assets/car_lottie.json')}
            autoPlay
            loop
            speed={0.75}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>Sign In</Text>
          <LoginForm
            email={email}
            password={password}
            onChange={onValueChange}
            onSubmit={onSingIn}
          />
          <Text style={styles.signUpTxt}>
            I'm a new user.
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={styles.link}>
              {' '}
              Sign up.
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
