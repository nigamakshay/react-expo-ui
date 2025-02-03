
import * as Notifications from 'expo-notifications';

export const schedulePushNotification = async (options) => { 

  await Notifications.scheduleNotificationAsync({
    content: {
      title: options.title,
      body: options.body,
      data: {data: options.data},
    },
    trigger: {seconds: options.timeDelay},
  });
}
