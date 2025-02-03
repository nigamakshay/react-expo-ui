import { USERS_URL } from '@env';
import { postData } from 'postData'; 

export function addUser(options) {

  postData({
    authRequired: false,
    url: USERS_URL,
    data: options.data,
    successCallback: options.successCallback,
    failureCallback: options.failureCallback,
    failureMessage: options.failureMessage
  });
}