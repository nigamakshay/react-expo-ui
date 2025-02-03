
import i18n from 'i18n-js';
import { alertMessage } from 'alertMessage';

export function showProfileIncompleteMessage(options) {
  
  alertMessage({
    ok: true, 
    cancel: true,
    okPressed: () => {options.okPressed && options.okPressed()},
    message: i18n.t('profileIncomplete')
  });
}