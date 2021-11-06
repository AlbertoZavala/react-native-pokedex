import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account } from '../screens/Account';
import { Pokedex } from '../screens/Pokedex';
import { Favorite } from '../screens/Favorite';

const Tab = createBottomTabNavigator()

export const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex" >
      <Tab.Screen name="Favorite" component={ Favorite } />
      <Tab.Screen name="Pokedex" component={ Pokedex } />
      <Tab.Screen name="Account" component={ Account } />
    </Tab.Navigator>
    
  )
}
