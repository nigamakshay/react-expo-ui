
import { BOOKINGS_URL } from '@env';
import { getData } from 'getData'; 
import { getAddress } from 'getAddress';
import { setAppData } from 'setAppData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAppData(options) {
  //ToDo: change BOOKINGS_URL to appDataUrl for specific data other than bookings

  getData({
    url: BOOKINGS_URL,
    bearerToken: options.userContext.bearerToken,
    successCallback: (result) => {
      setAppData(options.userContext, result);
    },
    failureMessage: options.failureMessage
  })

  //ToDo: make one call to get appData
  //ToDo: check address in get appData?
  getAddress({
    bearerToken: options.userContext.bearerToken,
    successCallback: (result) => {
      options.userContext.setAddresses(result.addresses);
    }
  });
}
