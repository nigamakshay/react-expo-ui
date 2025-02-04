import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { HomeStack } from 'homeStack';
import { AuthStack } from 'authStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { containerBackgroundColor } from 'colorStyles';

export default function RootNavigator() {
  let userContext = useContext(AuthenticatedUserContext);
  let user = userContext.user;

  async function resetUserData() {
    //await AsyncStorage.removeItem('appUser');
    await AsyncStorage.removeItem('appUserBearerToken');    
    userContext.setUser(null);
    userContext.setUserData(null);
    userContext.setBearerToken(null);
  }

  async function checkStoredData() {
    //var user = await AsyncStorage.getItem('appUser');
    var bearerToken = await AsyncStorage.getItem('appUserBearerToken')
    //userContext.setUserData(JSON.parse(user));

    if(bearerToken == null) {
      // resetUserData();
    } else {
      userContext.setBearerToken(JSON.parse(bearerToken));
    }    
  }
  
    if (!userContext.user || !userContext.bearerToken) {
      checkStoredData();
    }
    
  function setUserData(authenticatedUser) {
    userContext.setUser(authenticatedUser);
  }

  useEffect(() => {
    const unsubscribeAuth = auth().onAuthStateChanged(async authenticatedUser => {
      
      try {
        await (authenticatedUser ? setUserData(authenticatedUser) : resetUserData());
        //if(!userContext.isLoggedIn ) {          
    //      resetUserData();
     //   }
        
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);
  
  //Theme for navigator background color, surrounding main content of canceled bookings screen
  return (
    <NavigationContainer theme={{colors: {background: containerBackgroundColor}}}>
      {userContext.user && userContext.bearerToken ? <HomeStack userContext={userContext}/> : <AuthStack/>}
    </NavigationContainer>
  );
}
