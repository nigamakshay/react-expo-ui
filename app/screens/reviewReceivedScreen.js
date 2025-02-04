import { FullContainer, HorizontalView, VerticalScrollView } from 'containerStyles';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { AppText } from 'appText';
import i18n from 'i18n-js';
import { RatingIcon } from 'ratingIcon';
// import { getPartnerRating } from 'getPartnerRating';
import { AppActivityIndicator } from 'appActivityIndicator';
import { ReviewsCard } from 'reviewsCard';
import { cardStyle } from 'componentStyles';

export const ReviewReceivedScreen = (options) => {

  const [rating, setRating] = React.useState(4);
  const [partnerRatingObject, setPartnerRatingObject] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [reviews, setReviews] = React.useState([
    {partner_review: {text: 'Excellent work!'}},
    {partner_review: {text: 'Looking forward to another assignment...'}}
  ]);

  var params = options.route.params;
  const userContext = useContext(AuthenticatedUserContext);

  useEffect(() => {
    if (params && params.partnerRatingObject) {
      setPartnerRatingObject(params.partnerRatingObject);
      setRating(params.partnerRatingObject.rating);
      setReviews(params.reviews);
    } else {
      var requestParams = {};
      requestParams.bearerToken = userContext.bearerToken;
      requestParams.successCallback = (result) => {
        setLoading(false);
        if (result) {   
          setPartnerRatingObject(result.partner_rating);
          result.partner_rating && setRating(result.partner_rating.rating);
          setReviews(result.partner_reviews);
        }
      }
      // getPartnerRating(requestParams);
    }    
  }, []);

  return (
    <FullContainer>      
      <View style={{width: '95%', marginTop: 20}}>    
        {
          parseInt(rating) > 0 ?
          <HorizontalView>
            <View>
              <RatingIcon
                ratingValue={1}
                rating={rating}
                setRating={setRating}
              />
            </View>
            <View>
              <RatingIcon
                ratingValue={2}
                rating={rating}
                setRating={setRating}
              />
            </View>
            <View>
              <RatingIcon
                ratingValue={3}
                rating={rating}
                setRating={setRating}
              />
            </View>
            <View>
              <RatingIcon
                ratingValue={4}
                rating={rating}
                setRating={setRating}
              />
            </View>
            <View style={{marginRight: 10}}>
              <RatingIcon
                ratingValue={5}
                rating={rating}
                setRating={setRating}
              />
            </View>  
            <AppText text={rating + " " + i18n.t('outOf')}></AppText>
            {partnerRatingObject && <AppText style={{fontWeight: '500'}}
              text={"  (" + partnerRatingObject.count + ")"}></AppText>}
          </HorizontalView> : 
          <AppText text={i18n.t('ratingsUnavailable')}></AppText>
        }
        <AppActivityIndicator animating={loading}/>
        {
          reviews && reviews.length > 0 ? 
          <>
          <VerticalScrollView>
          {reviews.map((review, index) => (
            <ReviewsCard 
              key={index}
              partnerReview={review.partner_review}
              userContext={userContext}
              cardStyle={{
                disabled: true,
                ...cardStyle
              }}
            />
          ))}
          </VerticalScrollView>
        </> : <AppText text={i18n.t('reviewsUnavailable')}></AppText>
        }
      </View>
    </FullContainer>
  );
};