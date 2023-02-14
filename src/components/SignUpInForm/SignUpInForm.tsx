import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './SignUpInForm.style';
import Touchable from '@components/Touchable';
import {colors} from '@constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SignUpInFormInputs} from '@utils/helpers/types/common';

interface LoginFormProps {
  email: string;
  password: string;
  passwordConfirmation?: string;
  name?: string;
  isSignUp?: boolean;
  onChange: (type: SignUpInFormInputs, value: string) => void;
  onSubmit: () => void;
}

const SignUpInForm = ({
  email,
  password,
  name,
  onChange,
  onSubmit,
  isSignUp = false,
  passwordConfirmation,
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  return (
    <View style={styles.container}>
      {isSignUp && (
        <TextInput
          value={name}
          onChangeText={val => onChange('name', val)}
          autoCapitalize={'words'}
          placeholder="Name"
          style={styles.input}
        />
      )}

      <TextInput
        value={email}
        onChangeText={val => onChange('email', val)}
        autoCapitalize={'none'}
        placeholder="Email"
        style={styles.input}
      />
      <View style={styles.positionRelative}>
        <TextInput
          value={password}
          onChangeText={val => onChange('password', val)}
          autoCapitalize={'none'}
          placeholder="Password"
          style={[styles.input, styles.paddingRight]}
          secureTextEntry={!showPassword}
        />
        <Touchable
          onPress={() => setShowPassword(prev => !prev)}
          style={styles.showHide}>
          <Icon
            size={14}
            color="black"
            name={!showPassword ? 'eye' : 'eye-slash'}
          />
        </Touchable>
      </View>

      {isSignUp && (
        <View style={styles.positionRelative}>
          <TextInput
            value={passwordConfirmation}
            onChangeText={val => onChange('passwordConfirmation', val)}
            autoCapitalize={'none'}
            placeholder="Confirm Password"
            style={[styles.input, styles.paddingRight]}
            secureTextEntry={!showPasswordConfirmation}
          />
          <Touchable
            onPress={() => setShowPasswordConfirmation(prev => !prev)}
            style={styles.showHide}>
            <Icon
              size={14}
              color="black"
              name={!showPasswordConfirmation ? 'eye' : 'eye-slash'}
            />
          </Touchable>
        </View>
      )}

      <Touchable
        disabled={
          !email.length || password.length < 8 || (isSignUp && name!.length < 3)
        }
        disabledColor={colors.primaryBlueDisabled}
        style={styles.submitBtn}
        onPress={onSubmit}>
        <Text style={styles.submitTxt}>Sign {isSignUp ? 'Up' : 'In'}</Text>
      </Touchable>
    </View>
  );
};

export default SignUpInForm;
