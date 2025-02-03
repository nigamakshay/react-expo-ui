
import { ADDRESS_URL } from '@env';
import { deleteData } from 'deleteData'; 

export function deleteAddress(options) {
  
  deleteData({
    url: ADDRESS_URL + '/' + options.addressId,
    bearerToken: options.bearerToken,
    successCallback: options.successCallback,
    failureMessage: options.failureMessage
  })
}
