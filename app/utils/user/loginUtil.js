
import { showProfileIncompleteMessage } from 'showProfileIncompleteMessage';

export function isUserProfileComplete(options) {
  if (options) {   
    if(options.isProfileComplete) {
      return true;
    }
    var isAddressPresent = options.addresses &&
      options.addresses.length > 0;
    
    if (!options.userData || !options.userData.name || 
      !options.userData.mobile || !isAddressPresent) {
      showProfileIncompleteMessage(options);
      return false;
    } else {
      return true;
    }
  }
}