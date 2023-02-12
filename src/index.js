/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {ms, vs} from 'react-native-size-matters/extend';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@containers/auth/login';
import Registration from '@containers/auth/registration';
import HomeScreen from '@containers/home';
import AttendanceScreen from '@containers/attendance';
import AccountScreen from '@containers/account';
import SettingScreen from '@containers/setting';
import HomeIcon from '@svg/home.svg';
import AttendanceIcon from '@svg/attendance.svg';
import AccountIcon from '@svg/account.svg';
import SettingIcon from '@svg/setting.svg';
import {theme, colors} from '@theme';
import store from '@redux/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabIcons = ({Icon, ...rest}) => {
  return <Icon fill={rest.color} />;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.activeIconColor,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: iconProp => (
            <BottomTabIcons {...iconProp} Icon={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          tabBarIcon: iconProp => (
            <BottomTabIcons {...iconProp} Icon={AttendanceIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: iconProp => (
            <BottomTabIcons {...iconProp} Icon={AccountIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: iconProp => (
            <BottomTabIcons {...iconProp} Icon={SettingIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registraion" component={Registration} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(10),
    lineHeight: vs(12),
    fontWeight: '500',
  },
  tabBarStyle: {
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
  }
})

export default App;
