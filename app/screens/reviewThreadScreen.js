import React, { useEffect } from 'react';
import { PressableButton } from 'pressableButton';
import { TextAreaField } from 'textAreaField';
import { ReviewThreadCard } from 'reviewThreadCard';
import { 
  FullContainer, 
  VerticalScrollView 
} from 'containerStyles';
import { addReviewComment } from 'addReviewComment';
import { useNavigation } from '@react-navigation/native';
import { alertMessage } from 'alertMessage';
import { StackActions } from '@react-navigation/native'
import { AppActivityIndicator } from 'appActivityIndicator';
import { getPartnerReviewComments } from 'getPartnerReviewComments';
import i18n from 'i18n-js';
import { formButtonStyle } from 'componentStyles';
import { cardStyle } from 'componentStyles';
import { ViewSeparator } from '../components/separators/viewSeparator';
import { View } from 'react-native';

export const ReviewThreadScreen = (options) => {
  var review = options && options.route && options.route.params
  && options.route.params.review;

  var userContext = options.route && options.route.params && options.route.params.userContext

  const [reply, setReply] = React.useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [reviewComments, setReviewComments] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    var requestParams = {};
    requestParams.bookingId = review.booking_id;
    requestParams.bearerToken = userContext.bearerToken;
    requestParams.successCallback = (result) => {
      setLoading(false);
      if (result) {   
        setReviewComments(result.partner_reviews);
        setLoading(false);
      }
    }
    
    getPartnerReviewComments(requestParams);
  }, []);

  return (
    <FullContainer style={{padding: 10}}>
      <AppActivityIndicator animating={loading}/>
      <VerticalScrollView>
        {reviewComments && reviewComments.map((reviewComment, index) => (
          <>
            <ReviewThreadCard 
              key={index}
              review={reviewComment.partner_review} 
              userId={userContext && userContext.userData && userContext.userData.id}
              cardStyle={{
                disabled: true,
                ...cardStyle
              }}
            />
            <View style={{margin: 10}}></View>
          </>
        ))}        
      </VerticalScrollView>
      <TextAreaField 
        width={'100%'}
        placeholder={i18n.t("reply")}
        onChangeText={(reply) => {
          setReply(reply);
        }} 
        value={reply}
      />
        <PressableButton
          onPress={() => {
            var requestParams = {};
            requestParams.bearerToken = userContext.bearerToken;               
            requestParams.data = {
              booking_id: review.booking_id,
              text: reply,
              user_id: userContext.userData.id,
              partner_id: userContext.userData.id,
              parent_id: review.id     
            };
            requestParams.successCallback = (result) => {                            
              setLoading(false);
              alertMessage({
                ok: true, 
                message: i18n.t('done'),
                okPressed: () => {
                  navigation.dispatch(StackActions.popToTop());
                  navigation.navigate('ReviewReceivedScreen');
                }
              }); 
            }
            setLoading(true);
            addReviewComment(requestParams);
          }}
          text={i18n.t("save")}
          bgColor={options.color}
          {...formButtonStyle}
        />
    </FullContainer>
  );
}