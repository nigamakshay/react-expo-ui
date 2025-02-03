import { FullContainer, VerticalView, HorizontalRightView } from 'containerStyles';
import { LogoutButton } from 'logoutButton';
import { ProfileSettingCard } from 'profileSettingCard';
import { AddressSettingCard } from 'addressSettingCard';
import { ViewSeparator } from '../components/separators/viewSeparator';
import { RatingSettingCard } from 'ratingSettingCard';
import { PrivacyLink } from "../components/links/privacyLink";
import React, { useState, useContext, useEffect } from 'react';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';

export const SettingsScreen = (options) => {

  var nextScreen = options && options.route &&
    options.route.params && options.route.params.nextScreen;
  const userContext = useContext(AuthenticatedUserContext);

  return (
    <FullContainer>
      <VerticalView style={{height: '90%', width: '100%'}}>
        <ProfileSettingCard navigateToNextScreen={nextScreen}/>
        <ViewSeparator margin={5}/>
        <RatingSettingCard/>
        <ViewSeparator margin={5}/>
        <AddressSettingCard navigateToNextScreen={nextScreen}/>
        <ViewSeparator margin={5}/>                
        <HorizontalRightView style={{width: '100%', margin: 10, paddingRight: 10}}>
          <PrivacyLink/>
        </HorizontalRightView>
      </VerticalView>      
      <VerticalView 
        style={{
          width: '100%',
          height: '10%',
          justifyContent: 'flex-end'
        }}
      >
        <LogoutButton userContext={userContext}/>
      </VerticalView>
    </FullContainer>
  );
}