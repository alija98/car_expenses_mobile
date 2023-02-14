import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import RNBootSplash from 'react-native-bootsplash';
import {useAppSelector} from '@store/store';
import BottomTabNavigator from '@screens/BottomTabNavigator';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {
  const authToken = useAppSelector(state => state.user.token);

  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide();
      }}>
      {true ? <BottomTabNavigator /> : <AuthStack />}
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}

export default App;
