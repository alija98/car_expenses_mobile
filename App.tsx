import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import RNBootSplash from 'react-native-bootsplash';
import {useAppSelector} from '@store/store';
import BottomTabNavigator from '@screens/BottomTabNavigator';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {
  const authToken = useAppSelector(state => state.user.token);
  console.log(authToken);

  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide();
      }}>
      {authToken ? <BottomTabNavigator /> : <AuthStack />}
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}

export default App;
