import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { map, capitalize } from 'lodash';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

export const Type = ({types}) => {

  return (
    <View style={styles.content} >
      { map(types, (item, index) => (
        <Text style={{...styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}} key={index}>
          {capitalize(item.type.name)}
        </Text>
      )) }
    </View>
  )
}

const styles = StyleSheet.create({
  content: {    
    marginTop: 50,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius:20,
    marginHorizontal:10,
    backgroundColor: "#f0f"
  }
});