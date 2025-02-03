import i18n from 'i18n-js';
import { useContext, useState, useEffect } from 'react';
import { SettingsSectionCard } from 'settingsSectionCard';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { useNavigation } from '@react-navigation/native';
import { getAddress } from 'getAddress';
import { getAddressText } from 'addressesUtil';
import { useIsFocused } from "@react-navigation/native";
import { deleteAddress } from 'deleteAddress';
import { alertMessage } from 'alertMessage';
import { AppActivityIndicator } from 'appActivityIndicator';

export const AddressSettingCard = (options) => {

  const navigation = useNavigation();
  const userContext = useContext(AuthenticatedUserContext);
  const [addresses, setAddresses] = useState(null);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!userContext.addresses || !userContext.addresses[0]) {
      setLoading(true);
      getAddress({
        bearerToken: userContext.bearerToken,
        successCallback: (result) => {
          setLoading(false);
          setAddresses(result.addresses[0]);
          userContext.setAddresses(result.addresses);
        }
      });
    }
  }, [isFocused]);

  function deleteSuccessCallback(result) {
    userContext.setAddresses(result.data);
    userContext.setProfileComplete(false);
    alertMessage({
      ok: true, 
      message: i18n.t('addressDeleted'),
      okPressed: () => {
        if (options.navigateToNextScreen) {
          navigation.dispatch(StackActions.popToTop());
          navigation.navigate(options.navigateToNextScreen);
        } else {
          navigation.navigate('SettingsScreen');
        }
      }
    });
  }

  return (
    loading ? <AppActivityIndicator animating={loading}/> :
    <SettingsSectionCard
      title={i18n.t("addresses")}
      text={getAddressText({addresses: userContext.addresses})}
      actionRequired={!userContext.addresses || !userContext.addresses[0]}
      nextScreen='UserAddressesScreen'      
      delete={true}
      edit={true}
      deleteAction={
        (addressId) => {
          if(!addressId) {
            addressId = userContext.addresses[0].id;
          }
          deleteAddress({
            bearerToken: userContext.bearerToken,
            addressId: addressId,
            successCallback: (result) => {
              deleteSuccessCallback(result);
            }
          })
        }
      }
      navigationParams={{
        addresses: addresses,
        navigateToNextScreen: options.navigateToNextScreen || 'SettingsScreen'
      }}
    />    
  );
}