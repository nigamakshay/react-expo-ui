
import { ADDRESS_URL } from '@env';
import { getData } from 'getData'; 

export function getAddress(options) {
  
  getData({
    url: ADDRESS_URL,
    bearerToken: options.bearerToken,
    successCallback: options.successCallback,
    failureMessage: options.failureMessage
  })
}
