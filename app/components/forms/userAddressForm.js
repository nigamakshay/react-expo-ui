import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
  
import i18n from 'i18n-js';
import { TextField } from 'textField';
import { SaveButton } from 'saveButton';
import { useNavigation } from '@react-navigation/native';

import React, { useContext, useState, useEffect } from 'react';
import { FullContainer, VerticalScrollView } from 'containerStyles';
import { addAddress } from 'addAddress';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { alertMessage } from 'alertMessage';
import { AddressText } from 'addressText';
import { formulateAddressData } from 'addressesUtil';
import { MandatoryIcon } from 'mandatoryIcon';
import { useIsFocused } from "@react-navigation/native";
import { updateAddress } from 'updateAddress';
import { isUserProfileComplete } from 'loginUtil';
import { AppText } from 'appText';
import { AppTextSmall } from 'appTextSmall';
import { MandatoryText } from 'mandatoryText';
import { titleStyle } from 'componentStyles';

export const UserAddressForm = (options) => {

  const [flat, setFlat] = React.useState(null);
  const [street, setStreet] = React.useState(null);
  const [landmark, setLandmark] = React.useState(null);
  const [valueChanged, setValueChanged] = React.useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);                                                                        
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  const navigation = useNavigation();
  const userContext = useContext(AuthenticatedUserContext);
  
  const isFocused = useIsFocused();

  const successCallback = (result) => {
    alertMessage({
      ok: true, 
      message: i18n.t('addressSaved'),
      okPressed: () => {
        userContext.setAddresses(result.data && result.data.addresses);
      
        if (options.route && options.route.params &&
          options.route.params.nextScreenAfterSave &&
          isUserProfileComplete({
            userData: userContext.userData,
            addresses: result.data && result.data.addresses
          })) {                  
          navigation.navigate(options.route.params.nextScreenAfterSave, {addresses: result.data && result.data.addresses});
        } else {          
          navigation.navigate('SettingsScreen', {
            nextScreen: options.navigateToNextScreen,
            addresses: result.data && result.data.addresses
          });
        }       
      }
    });
  }

  useEffect(() => {
    var paramsLocation = options && options.route 
      && options.route.params && 
      options.route.params.location;
    if (paramsLocation) {
      setLocation(paramsLocation);
    }

    if (options.address) {
      setFlat(options.address.flat_building);
      setStreet(options.address.apt_street_area);
      setLandmark(options.address.landmark_directions);
    }
  }, [isFocused]);

  function isFormFilled() {
    return !(flat == null || street == null || 
      flat.length == 0 || street.length == 0);
  }

  return (
    <VerticalScrollView 
      contentContainerStyle={{padding: 10, width: '100%'}}>
      {!options.address && <View style={{marginBottom: 20}}>
        <AddressText location={location}/>
        </View>}
      {!options.address && <AppTextSmall style={{marginTop: 20, marginBottom: 30}} text={i18n.t("correctLocation")}></AppTextSmall>}
      <MandatoryText text={'houseFlatLabel'} style={titleStyle}/>
      <TextField 
        onChangeText={(flat) => {
          setValueChanged(true);
          setFlat(flat);
        }} 
        value={flat}
      />

      <Text style={{marginTop: 20, fontWeight: '500'}}>
        <MandatoryText text={'streetLabel'} style={titleStyle}/>
      </Text>
      <TextField        
        onChangeText={(street) => {
          setValueChanged(true);
          setStreet(street);
        }} 
        value={street}
      />  

      <AppText text={i18n.t('landmark')} style={{marginTop: 20, ...titleStyle}}/>
      <TextField        
        onChangeText={(landmark) => {
          setValueChanged(true);
          setLandmark(landmark);
        }} 
        value={landmark}
      />        
      <FullContainer style={{marginTop: 20}}>
        <SaveButton
          payload={{
            data: isFormFilled() && formulateAddressData({
              location: location,
              formData: {
                flat: flat,
                street: street,
                landmark: landmark
              }
            }),
            id: options.address && options.address.id
          }}
          disabled={!isFormFilled()}
          onPress={options.address && options.address.id ? 
            updateAddress : addAddress
          }
          setColorOn={isFormFilled()} 
          successCallback={successCallback}        
        />     
      </FullContainer>          
        </VerticalScrollView>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});