import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Fontisto';

import ADIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';

import Home from '@screens/Home/Home';
import Settings from '@screens/Settings/Settings';
import Touchable from '@components/Touchable';
import {colors} from '@constants';
import {useAppDispatch} from '@store/store';
import {logout} from '@store/user';
import Cars from './Cars';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  return (
    <Touchable onPress={() => dispatch(logout())}>
      <EIcon
        size={24}
        color={colors.primaryBlue}
        name={'log-out'}
        style={styles.logoutButton}
      />
    </Touchable>
  );
};

const HomeIcon = (isFocused: boolean) => (
  <Icon size={isFocused ? 26 : 22} color={colors.primaryBlue} name={'home'} />
);
const CarIcon = (isFocused: boolean) => (
  <FIcon size={isFocused ? 26 : 22} color={colors.primaryBlue} name={'car'} />
);
const SettingsIcon = (isFocused: boolean) => (
  <ADIcon
    size={isFocused ? 26 : 22}
    color={colors.primaryBlue}
    name={'setting'}
  />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryBlue,
        headerRight: LogOutButton,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => HomeIcon(focused),
          tabBarLabelStyle: {fontSize: 12},
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => CarIcon(focused),
          tabBarLabelStyle: {fontSize: 12},
        }}
        name="Cars"
        component={Cars}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => SettingsIcon(focused),
          tabBarLabelStyle: {fontSize: 12},
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 10,
  },
});
