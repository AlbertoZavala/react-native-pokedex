import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsFavoriteApi  } from '../api/favorite'

export const Favorite = () => {  
  
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  }

  return (
    <SafeAreaView>
      <Text>Favoritos</Text>
      <Button title="Obtener Favoritos" onPress={checkFavorites}></Button>
    </SafeAreaView>
  )
}