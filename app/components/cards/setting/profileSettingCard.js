import i18n from 'i18n-js';
import React, { useContext, useState, useEffect } from 'react';
import { SettingsSectionCard } from 'settingsSectionCard';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { getProfileDisplayText } from 'profileUtil';
import { useIsFocused } from "@react-navigation/native";
import { getUserProfile } from 'getUserProfile';

export const ProfileSettingCard = (options) => {

  const isFocused = useIsFocused();
  const userContext = useContext(AuthenticatedUserContext);
  const [displayText, setDisplayText] = React.useState();
  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {    
    //setLoading(true);    
    getUserProfile({
      bearerToken: userContext.bearerToken,
      successCallback: (result) => {
        //setLoading(false);
        setProfileInfo(result.user);
        userContext.setProfileComplete(result.is_profile_complete);
        userContext.setUserData(result.user);
        setDisplayText(getProfileDisplayText(result.user));
      }
    });
    
  }, [isFocused]);

  return (
    <SettingsSectionCard
      title={i18n.t("profile")}
      edit={true}
      actionRequired={!profileInfo || !profileInfo.mobile || !profileInfo.name}
      text={displayText}
      nextScreen='EditUserProfileScreen'
      navigationParams={{        
        navigateToNextScreen: options.navigateToNextScreen || 'SettingsScreen'
      }}
    />    
  );
}