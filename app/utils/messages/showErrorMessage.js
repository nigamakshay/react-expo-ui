import i18n from 'i18n-js';
import { alertMessage } from 'alertMessage';
import { logout } from 'logoutService';

export function showErrorMessage(options) {
  options = options || {};

  let key = options.errorKey || options.message_code;
  let message = key ? i18n.t(key, { defaultValue: i18n.t('errorAlert')}) :
    options.text || options.message || i18n.t('errorAlert');  

  alertMessage({
    ok: true, 
    message: message,
    okPressed: () => {
      if(options.message_code == 'EXPIRED_SIGNATURE' || 
        options.message == 'LOGIN_REQUIRED') {
          logout();
        }
      
      // if(options.navigation && options.message_code == 'LOGIN_REQUIRED') {
      //   options.navigation.navigate('HomeScreen');
      // }
    }
  });
}
