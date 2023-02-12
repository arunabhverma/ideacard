import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { ms } from 'react-native-size-matters/extend';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BackIcon from '@svg/back.svg';
import {colors} from '@theme';
import Settings from './setting';
import ManageKids from './manageKids';

const Stack = createNativeStackNavigator();

const HeaderLeft = (props) => {
  return(
    <TouchableRipple
    onPress={() => props.navigation.goBack()}
    style={{padding: ms(10), borderRadius: ms(50)}}
    rippleColor="rgba(0, 0, 0, .32)">
      <BackIcon />
  </TouchableRipple>
  );
}

const App = () => {
  return (
    <Stack.Navigator screenOptions={(props) => ({headerTitle: '', headerStyle: {backgroundColor:colors.third}, headerBackTitleVisible: false, headerLeft:(my) => <HeaderLeft {...props} {...my} />})}>
      <Stack.Screen name="Setting" component={Settings} options={{headerShown: false}} />
      <Stack.Screen name="ManageKids" component={ManageKids} />
    </Stack.Navigator>
  );
};

export default App;
