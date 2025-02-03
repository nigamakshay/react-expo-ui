
import { ADDRESS_URL } from '@env';
import { postData } from 'postData'; 

export function addAddress(options) {
  
  postData({
    url: ADDRESS_URL,
    data: options.payload.data,
    bearerToken: options.bearerToken,
    successCallback: options.successCallback,
    failureMessage: options.failureMessage
  })
}
