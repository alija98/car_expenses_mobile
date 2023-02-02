import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import RNBootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  const isLoggedIn = false;

  RNBootSplash.getVisibilityStatus().then(status => console.log(status));

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      {isLoggedIn ? null : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
