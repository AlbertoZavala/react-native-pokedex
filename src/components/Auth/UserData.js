import React, { useCallback, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { size } from 'lodash';
import useAuth from '../../hooks/useAuth';
import {getPokemonsFavoriteApi} from '../../api/favorite'

export const UserData = () => {
  const [total, setTotal] = useState();
  const { auth, logout } = useAuth(0);

  useFocusEffect(
    useCallback(() => {
      (async()=>{
        try{          
          const response = await getPokemonsFavoriteApi();          
          setTotal(size(response));
        }catch(error){          
          setTotal(0)
        }
      })();
    }, [])
  ) 

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}> Bienvenido</Text>
        <Text style={styles.title}>
          {`${auth.firstName} ${auth.lastName}`}
        </Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`}/>
        <ItemMenu title="Username" text={`${auth.username} `}/>
        <ItemMenu title="Email" text={`${auth.email} `}/>
        <ItemMenu title="Total Favoritos" text={`${total} Pokemons`}/>
      </View>

      <Button title="Desconectarse" onPress={logout} style={styles.btnLogout} />
    </View>
  )
}

const ItemMenu = ({title, text}) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuItem}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop:20,
  },
  titleBlock: {
    marginBottom:30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF"
  },
  itemMenuItem: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 20
  }
});