
import { ADDRESS_URL } from '@env';
import { putData } from 'putData'; 

export function updateAddress(options) {
  
  putData({
    url: ADDRESS_URL + '/' + options.payload.id,
    data: options.payload.data,
    bearerToken: options.bearerToken,
    successCallback: options.successCallback,
    failureMessage: options.failureMessage
  })
}
