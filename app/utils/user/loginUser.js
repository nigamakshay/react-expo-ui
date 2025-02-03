import { USERS_URL } from '@env';
import { postData } from 'postData'; 

export function loginUser(options) {

  postData({
    authRequired: false,
    url: USERS_URL + '/login',
    data: options.data,
    successCallback: options.successCallback,
    failureCallback: options.failureCallback,
    failureMessage: options.failureMessage
  });
}