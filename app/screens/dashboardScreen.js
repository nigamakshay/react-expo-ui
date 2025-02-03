import { useContext, useEffect } from 'react';
import { FullContainer } from 'containerStyles';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { useIsFocused } from "@react-navigation/native";
import { getAppData } from 'getAppData';

export const DashboardScreen = ({ navigation }) => {

  const isFocused = useIsFocused();
  const userContext = useContext(AuthenticatedUserContext);
  
  useEffect(() => {
    getAppData({userContext: userContext});
  }, [isFocused]);

  function userServicesPresent() {
    var userData = userContext.userData;
    return userData && userData.user_services && 
      userData.user_services.length === 0;
  }

  return (
    <FullContainer>

    </FullContainer>
  );
}