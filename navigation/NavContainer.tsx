import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/public_screens/HomeScreen';
import { BottomTabsNavigation } from './BottomTabsNavigation';

const Stack = createNativeStackNavigator();


export const NavContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }} >
        <Stack.Screen name="Bottom_tabs_navigations" component={BottomTabsNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}