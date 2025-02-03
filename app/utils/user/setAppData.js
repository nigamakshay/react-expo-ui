
//import { getServiceCategories } from 'getServiceCategories';

export function setAppData(userContext, result) {
  userContext.setProfileComplete(result.is_profile_complete);
  if (result.states_count !== 'undefined') {
    userContext.setBookingsStateMap(result.states_count);    
  }
  
  //getServiceCategories({
    //userContext: userContext,
    //bearerToken: result.token
  //});
}