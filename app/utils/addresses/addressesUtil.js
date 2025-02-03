import i18n from 'i18n-js';

export const formulateAddressData = (options) => {
  var data = {};
  var location = options.location;

  data.flat_building = options.formData.flat;
  data.apt_street_area = options.formData.street;
  data.landmark_directions = options.formData.landmark;

  if (location && location.selectedCoordinate && location.deviceAddress) {
    data.latitude = location.selectedCoordinate.latitude;
    data.longitude = location.selectedCoordinate.longitude;
    data.country = location.deviceAddress[0].country;
    data.state = location.deviceAddress[0].region;
    data.city = location.deviceAddress[0].city;
    data.zipcode = location.deviceAddress[0].postalCode;

    data.region = null;
    if (location.deviceAddress[0].district) {
      data.region = location.deviceAddress[0].district;
    }

    if (location.deviceAddress[0].name) {
      if (data.region) {
        data.region += ', ' + location.deviceAddress[0].name;
      } else {
        data.region = location.deviceAddress[0].name;
      }    
    }
  }

  return data; 
}

export const getAddressText = (options) => {
    if (!options || !options.addresses || !options.addresses[0]) {
      return i18n.t('addressRequired');
    }

    var addressText = '';
    var address = options.addresses[0];       
    
    if (address.flat_building) {
      addressText = address.flat_building; 
    }

    if (address.apt_street_area) {
      if (address.flat_building) {
        addressText += ', ';
      }
      addressText += address.apt_street_area; 
    }

    if (address.landmark_directions) {
      if (address.flat_building || address.apt_street_area) {
        addressText += ', ';
      }      
      addressText += address.landmark_directions; 
    }

    return addressText;
  }