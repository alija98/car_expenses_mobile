import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ADIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';

import Home from '@screens/Home/Home';
import Settings from '@screens/Settings/Settings';
import Touchable from '@components/Touchable';
import {colors} from '@constants';
import {useAppDispatch} from '@store/store';
import {logout} from '@store/user';

const Tab = createBottomTabNavigator();

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  return (
    <Touchable onPress={() => dispatch(logout())}>
      <EIcon
        size={24}
        color={colors.primaryBlue}
        name={'log-out'}
        style={{marginRight: 10}}
      />
    </Touchable>
  );
};

const HomeIcon = () => (
  <Icon size={24} color={colors.primaryBlue} name={'home'} />
);
const SettingsIcon = () => (
  <ADIcon size={24} color={colors.primaryBlue} name={'setting'} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryBlue,
        headerRight: LogOutButton,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabelStyle: {fontSize: 12},
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: SettingsIcon,
          tabBarLabelStyle: {fontSize: 12},
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
