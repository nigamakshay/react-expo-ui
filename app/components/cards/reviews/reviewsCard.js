import { CardView } from './../style.js';
import { HorizontalLeftView, HorizontalRightView } from 'containerStyles';
import { AppText } from 'appText';
import { PressableButton } from 'pressableButton';
import i18n from 'i18n-js';
import { useNavigation } from '@react-navigation/native';
import { cardButtonStyle } from 'componentStyles';
import { cardBackgroundColor } from 'colorStyles';

export const ReviewsCard = (options) => {

  const navigation = useNavigation();
  
  return (
    <CardView {...options.cardStyle} style={{height: 120}}>
      <HorizontalLeftView style={{height: '50%', backgroundColor: cardBackgroundColor}}>
        <AppText numberOfLines={3} text={options.partnerReview.text}></AppText>
      </HorizontalLeftView>
      <HorizontalRightView style={{backgroundColor: cardBackgroundColor}}>
        <PressableButton
          onPress={() => {
            navigation.navigate('ReviewThreadScreen', {
              review: options.partnerReview,          
              userContext: options.userContext
            })
          }} 
          text={i18n.t("view")}
          bgColor={options.color}
          width={options.width || '90px'}
          {...cardButtonStyle}
        />
      </HorizontalRightView>
    </CardView>
  );
}