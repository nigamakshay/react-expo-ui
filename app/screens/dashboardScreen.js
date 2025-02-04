import { useContext, useEffect } from 'react';
import { FullContainer, CenterContainer} from 'containerStyles';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { useIsFocused } from "@react-navigation/native";
import { getAppData } from 'getAppData';
import I18n from 'i18n-js';
import { Text } from 'react-native';

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
      <CenterContainer>
        <Text>{I18n.t('dashboardInstruction')}</Text>
      </CenterContainer>
    </FullContainer>
  );
}