import i18n from 'i18n-js';
import { Picker } from '@react-native-picker/picker';
import {
  BOOKING_STATE_IN_PROGRESS,
  BOOKING_STATE_COMPLETED,
  BOOKING_STATE_CANCELED
} from 'constants';
  
export const unfilteredServiceList = (servicesList) => {

  let pickerData = servicesList.map(i => {
    
    return <Picker.Item 
      key = { i.id } 
      label = { i.name } 
      value = { i.id } />
    })

  return pickerData;
  }

export const  filteredServiceList = (servicesList, userUserServicesMap) => {
  
  let pickerData = servicesList.map(i => {
    if (!userUserServicesMap[i.id]) {
      return <Picker.Item 
        key={i.id} 
        label={i.name}
        value={i.id} />  
      }    
    });

  return pickerData;
}

export const formulatePickerData = (servicesList, userUserServicesMap) => {
    if(!servicesList) return [];
    
    if (userUserServicesMap && Object.keys(userUserServicesMap).length > 0) {
      return filteredServiceList(servicesList, userUserServicesMap);
    } else {
       return unfilteredServiceList(servicesList);
    }

}


export const bookingProgressPickerData = (currentBookingState) => {
  var pickerData = [];
  var states = [];  

  if (currentBookingState == BOOKING_STATE_COMPLETED || 
    (currentBookingState == BOOKING_STATE_CANCELED)) states.push(BOOKING_STATE_IN_PROGRESS);
  if (currentBookingState != BOOKING_STATE_COMPLETED) states.push(BOOKING_STATE_COMPLETED);
  if (currentBookingState != BOOKING_STATE_CANCELED) states.push(BOOKING_STATE_CANCELED);

  for(var i=1; i<=states.length; i++) {
    pickerData.push(
      <Picker.Item 
        key={i}
        label={i18n.t('BOOKING_STATE_' + states[i-1])}
        value={states[i-1]} 
      />
    );
  }

  return pickerData;
}