import i18n from 'i18n-js';
import { View, Alert } from 'react-native';

export function alertMessage(options) {

  Alert.alert(options.title, options.message, [
    options.ok && { 
      text: options.okText || i18n.t('ok'), 
      onPress: () => {options.okPressed && options.okPressed(); 
        //console.log('OK Pressed')
      } 
    },
    options.cancel && {
      text: options.cancelText || i18n.t('cancel'),
      onPress: () => {options.cancelPressed && options.cancelPressed(); 
        //console.log('Cancel Pressed')
      },
      style: 'cancel'
    }    
  ]);
}