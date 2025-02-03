import i18n from 'i18n-js';
import React, { useContext, useEffect } from 'react';
import { SettingsSectionCard } from 'settingsSectionCard';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { useIsFocused } from "@react-navigation/native";
import { getUserRating } from 'getUserRating';

export const RatingSettingCard = (options) => {

  const isFocused = useIsFocused();
  const userContext = useContext(AuthenticatedUserContext);
  const [displayText, setDisplayText] = React.useState();
  const [rating, setRating] = React.useState(0);
  const [userRatingObject, setUserRatingObject] = React.useState(null);
  const [reviews, setReviews] = React.useState(null);

  useEffect(() => {    
    var requestParams = {};
    requestParams.bearerToken = userContext.bearerToken;
    requestParams.successCallback = (result) => {      
      if (result) {
        setUserRatingObject(result.user_rating);
        result.user_rating && setRating(result.user_rating.rating);
        setReviews(result.user_reviews);
        result.user_rating && setDisplayText(result.user_rating.rating);
      }
    }
    
    getUserRating(requestParams);   
  }, [isFocused]);

  return (
    <SettingsSectionCard
      title={i18n.t("ratingsAndReviews")}      
      text={displayText}
      view={true}
      edit={false}
      nextScreen='ReviewReceivedScreen'
      navigationParams={{
        userRatingObject: userRatingObject,
        reviews: reviews,
        navigateToNextScreen: options.navigateToNextScreen || 'SettingsScreen'
      }}
    />    
  );
}