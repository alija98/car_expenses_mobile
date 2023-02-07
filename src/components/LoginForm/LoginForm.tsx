import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './LoginForm.styles';
import Touchable from '@components/Touchable';
import {colors} from '@constants';

interface LoginFormProps {
  username: string;
  password: string;
  onChange: (type: 'username' | 'password', value: string) => void;
  onSubmit: () => void;
}

const LoginForm = ({
  username,
  password,
  onChange,
  onSubmit,
}: LoginFormProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={val => onChange('username', val)}
        autoCapitalize={'none'}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={val => onChange('password', val)}
        autoCapitalize={'none'}
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <Touchable
        disabled={!username.length || password.length < 8}
        disabledColor={colors.primaryBlueDisabled}
        style={styles.submitBtn}
        onPress={onSubmit}>
        <Text style={styles.submitTxt}>Sign In</Text>
      </Touchable>
    </View>
  );
};

export default LoginForm;
