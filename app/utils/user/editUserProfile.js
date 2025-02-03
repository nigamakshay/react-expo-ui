
import { USERS_URL } from '@env';
import { putData } from 'putData'; 

export function editUserProfile(options) {
  
  putData({
    url: USERS_URL + '/' + options.payload.id,
    data: options.payload.data,
    bearerToken: options.bearerToken,
    data: options.payload.data,
    successCallback: options.successCallback,
    failureMessage: options.failureMessage
  });
}