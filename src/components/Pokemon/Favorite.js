import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Favorite = ({id}) => {

  const addFavorite = () => {
    console.log('agregar a favoritos: ', id);
  }

  return (
    <Icon 
      name="heart" 
      color="#fff" 
      size={20} 
      onPress={addFavorite} 
      style={{marginRight: 20}} />
  )
}

