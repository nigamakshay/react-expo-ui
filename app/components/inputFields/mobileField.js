import i18n from 'i18n-js';
import React, {useEffect} from 'react';
import { HorizontalLeftView } from 'containerStyles';
import { InputField } from 'inputField';
import { placeholderTextColor } from 'colorStyles';

export const MobileField = (options) => {
  const [numberPrefix, setNumberPrefix] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();

  useEffect(() => {
    if(options && options.value) {
      setNumberPrefix(options.value.substring(0, 3));
      setPhoneNumber(options.value.substring(3));
    } else {
      setNumberPrefix('+91');
    }
  }, []);

  return <HorizontalLeftView style={{width: '100%', ...options.containerStyle}}>
    <InputField
      style={{ marginVertical: 10, ...options.inputBoxStyle }}
      value={numberPrefix}
      width={'15%'}
    />

    <InputField
      style={{ marginVertical: 10, marginLeft: 2, ...options.inputBoxStyle }}
      placeholder={i18n.t('tenDigitMobileNumber')}
      placeholderTextColor={placeholderTextColor}
      width={'84%'}
      autoFocus
      maxLength={10}
      value={phoneNumber}
      autoCompleteType="tel"
      keyboardType="numeric"
      textContentType="telephoneNumber"
      onChangeText={phoneNumber => {
        phoneNumber = phoneNumber.replace(/\D/g, '');
        setPhoneNumber(phoneNumber);
        options.onChangeText && options.onChangeText(numberPrefix + phoneNumber);
      }}
    />
  </HorizontalLeftView>;
}