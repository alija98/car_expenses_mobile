import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '@screens/Auth/SignIn';
import SignUp from '@screens/Auth/SignUp';
import {AuthStackParamList} from '../utils/helpers/types/navigation';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default AuthStack;
