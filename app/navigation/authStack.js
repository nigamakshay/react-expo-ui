import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'homeScreen';
import { LoginSignUpScreen } from 'loginSignUpScreen';
import i18n from 'i18n-js';

const Stack = createNativeStackNavigator();
 
export const AuthStack = () => {

  return (      
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />          
      <Stack.Screen name="LoginSignUpScreen" component={LoginSignUpScreen} options={{headerShown: false, title: i18n.t("login") }} />
    </Stack.Navigator>   
  );
}