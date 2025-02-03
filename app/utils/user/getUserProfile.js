
import { PROFILE_INFO_URL } from '@env';
import { getData } from 'getData'; 

export function getUserProfile(options) {

  getData({
    url: PROFILE_INFO_URL,
    bearerToken: options.bearerToken,
    successCallback: options.successCallback,
    failureMessage: options.failureMessage
  })
}
