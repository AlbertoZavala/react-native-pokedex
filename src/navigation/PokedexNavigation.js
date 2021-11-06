import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Pokedex } from '../screens/Pokedex';

const Stack = createStackNavigator();

export const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>

  )
}
