
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { registerNotificationToken } from 'registerNotificationToken';
import Constants from 'expo-constants';

export const SetupNotifications = (options) => {

  const [expoPushToken, setExpoPushToken] = useState(null);
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {    
      setToken(token);
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {      
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      var data = response.notification.request.content.data;
      if (data.navigate_to_screen) {
        options.navigation.navigate(data.navigate_to_screen);
      }
    });

    //ToDo: fix this to auto refresh the token
    //const subscription = Notifications.addPushTokenListener(token => {
    //  console.log("\n\n\n\n\n here... " + JSON.stringify(token));
//      setToken(token);      
  //  });  

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
      //subscription.remove();
    };

  }, [expoPushToken]);

function setToken(token) {
  setExpoPushToken(token);

  // ToDo: add retry for failed token registration
  // https://docs.expo.dev/versions/latest/sdk/notifications/#addpushtokenlistenerlistener-pushtokenlistener-subscription
  // search for retry
  
  options.bearerToken && registerNotificationToken({
    payload: {data: {token: token}},
    bearerToken: options.bearerToken 
  });
}  

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Please enable notifications to receive OTPs and booking updates.');
      return;
    }
    
    token = (await Notifications.getExpoPushTokenAsync(
      {'projectId': Constants.expoConfig.extra.eas.projectId})).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
  return null;
}