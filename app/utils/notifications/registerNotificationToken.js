
import { NOTIFICATIONS_TOKEN_URL } from '@env';
import { postData } from 'postData'; 

export function registerNotificationToken(options) {

  postData({
    url: NOTIFICATIONS_TOKEN_URL,
    data: options.payload && options.payload.data,
    bearerToken: options.bearerToken
  })
}
