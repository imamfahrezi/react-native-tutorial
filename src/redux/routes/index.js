import React from 'react';
import Home from '../views/Home';
import Login from '../views/Login';
import ThunkExample from '../views/ThunkExample';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ThunkExample" component={ThunkExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
