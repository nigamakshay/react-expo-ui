
import { postData } from 'postData';
import { SEND_NOTIFICATIONS_URL } from '@env';

export const sendNotification = (options) => {
  
  postData({
    url: SEND_NOTIFICATIONS_URL,
    data: options.data,
    bearerToken: options.bearerToken
  });  
}

{/*[{
      to: "ExponentPushToken[9JEaPGGk5q3z6xD-TJ9H0U]",
      title: "New Booking",
      body: "Facial on sunday",
      data: {navigateToScreen: "EditUserProfileScreen"},
    }] 

    bearerToken: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.vmnIxWi3KRS4qvn6-b4D-Vz5XrM-T8sOemh_s2u7Pm0"
    */}