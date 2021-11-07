import React from 'react'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm } from '../components/Auth/LoginForm';
import {UserData} from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

export const Account = () => {
  const { auth } = useAuth();

  console.log(auth)
  return (
    <View>
      {
        auth ?
        <UserData /> :
        <LoginForm />
      }
    </View>
  )
}
