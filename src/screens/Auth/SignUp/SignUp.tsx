import React, {useState} from 'react';
import {Text, SafeAreaView, StatusBar, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '@utils/helpers/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {colors} from '@constants';
import {useAppDispatch} from '@store/store';
import LottieView from 'lottie-react-native';
import styles from './SignUp.styles';
import LoginForm from '@components/SignUpInForm';
import {SignUpInFormInputs} from '@utils/helpers/types/common';
import {signUpUser} from '@store/user';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const dispatch = useAppDispatch();

  const onValueChange = (type: SignUpInFormInputs, value: string) => {
    if (type === 'password') {
      setPassword(value);
    } else if (type === 'email') {
      setEmail(value);
    } else if (type === 'name') {
      setName(value);
    } else {
      setPasswordConfirmation(value);
    }
  };

  const onSingUp = () => {
    dispatch(signUpUser({email, password, passwordConfirmation, name}));
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require('../../../assets/car-transforming.json')}
            autoPlay
            loop
            speed={0.5}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <LoginForm
            email={email}
            password={password}
            passwordConfirmation={passwordConfirmation}
            name={name}
            onChange={onValueChange}
            onSubmit={onSingUp}
            isSignUp
          />
          <Text style={styles.signUpTxt}>
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={styles.link}>
              {' '}
              I have an account.
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
