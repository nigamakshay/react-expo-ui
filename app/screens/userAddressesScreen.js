
import i18n from 'i18n-js';
import { useContext, useEffect, useState } from 'react';
import { editUserProfile } from 'editUserProfile';
import { UserAddressForm } from 'userAddressForm';;
import { View, Text } from 'react-native';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { CommonActions } from '@react-navigation/native';
import { FullContainer, CenterContainer, VerticalView } from 'containerStyles';
import { PressableButton } from 'pressableButton';
import { getAddress } from 'getAddress';
import { useIsFocused } from "@react-navigation/native";
import { AppActivityIndicator } from 'appActivityIndicator';
import { bigButtonStyle } from '../styles/componentStyles';

export const UserAddressesScreen = ({navigation, route}) => {

  const userContext = useContext(AuthenticatedUserContext);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();  

  useEffect(() => {
    if(route.params && route.params.address) {
      setAddress(route.params.address);
    } else {
      var options = {};
      options['bearerToken'] = userContext.bearerToken;
      options.successCallback = (result) => {
        setLoading(false);
        setAddress(result.addresses[0]); 
      }
      setLoading(true);
      getAddress(options);      
    }
  }, [isFocused]);

  return (
    <CenterContainer>      
      { 
        address ? <UserAddressForm           
          address={address}
          nextScreenAfterSave={route.params.nextScreenAfterSave}
        /> :
        <><CenterContainer><AppActivityIndicator animating={loading}/></CenterContainer>
        {!loading && <VerticalView style={{width: '100%'}}><PressableButton 
          width={'70%'}
          {...bigButtonStyle}
          text={i18n.t('selectLocation')}                    
          onPress={() => {
            navigation.navigate('LocationSelectionScreen', {
              onConfirmLocation: (location) => {                
                navigation.navigate('UserAddressForm', {
                  location: location,
                  nextScreenAfterSave: route.params &&
                  route.params.navigateToNextScreen
                });
              }
            })
          }}
        /></VerticalView>}</>
      }  
    </CenterContainer>
  );
}