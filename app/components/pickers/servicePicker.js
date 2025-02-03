import { getServices } from 'getServices';
import React, { useEffect, useContext } from 'react';
import { AppPicker } from 'appPicker';
import { formulatePickerData } from 'pickerUtil';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';

export const ServicePicker = (options) => {
  const userContext = useContext(AuthenticatedUserContext);
  
  useEffect(() => {
    // if (!userContext.serviceList) {
    //   var options = {};
    //   options['bearerToken'] = userContext.bearerToken;
    //   options.successCallback = (result) => { setData(result); }
    //   getServices(options);
    // }
  }, []);

  function setData(result) {
    return;
    userContext.setServiceList(result.services);
    let serviceMap = {};
    result.services.map(i => {
      serviceMap[i.id] = i.name;   
    })
    userContext.setServiceMap(serviceMap);    
  }

  return <AppPicker 
    label='services'
    defaultValue={options.selectedService}
    pickerData={formulatePickerData(options.serviceCategory &&
      options.serviceCategory.services, userContext.userUserServicesMap)}
    onValueChange={(selectedValue) => {options.onValueChange(selectedValue)}}
    />
}