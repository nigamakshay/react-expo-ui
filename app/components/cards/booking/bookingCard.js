import i18n from 'i18n-js';
import { CardView } from './../style.js';
import { 
  HorizontalLeftView, 
  VerticalLeftView,  
  LayoutRight 
} from 'containerStyles';
import { View } from 'react-native';
import { AppText } from 'appText';
import { AppTextSmall } from 'appTextSmall';
import { AmountNumberText } from 'amountNumberText';
import { DeclineBookingButton } from 'declineBookingButton';
import { AcceptBookingButton } from 'acceptBookingButton';
import { InProgressBookingButton } from 'inProgressBookingButton';
import { formatDateMonthYear, canMarkBookingInProgress } from 'datesUtil';
import { ViewBookingButton } from 'viewBookingButton';
import { KeepBookingButton } from 'keepBookingButton';
import { availableColor, dangerColor, cardBackgroundColor } from 'colorStyles';
import { 
  BOOKING_STATE_PENDING, 
  BOOKING_STATE_IN_PROGRESS, 
  BOOKING_STATE_BOOKED 
} from 'constants';
import { BookingProgressPicker } from 'bookingProgressPicker';

export const BookingCard = (options) => {

  var totalAmount = 0;
  var serviceNames;
  var serviceNamesArray = [];
  var totalDuration = 0;
  
  function formulateData() {
    var bookedServiceName = "";
    options.booking.booked_services.forEach(function(booked_service) {
      totalAmount += parseInt(booked_service.amount);
      totalDuration += booked_service.duration;
      bookedServiceName = booked_service.service_name;
      serviceNamesArray.push(bookedServiceName);

      if (serviceNames) {
        serviceNames = serviceNames + ", " + bookedServiceName;
      } else {
        serviceNames = bookedServiceName;               
      }
    });
  }
  
  formulateData();

  var buttonsJustification = options.booking.state == BOOKING_STATE_PENDING ? 
    'center' : 'flex-end';
    
  let dateString = i18n.t('date') + ": " + formatDateMonthYear(options.booking.date);
  let timeString = i18n.t('time') + ": " + options.booking.starts_at;
  return (
    <CardView {...options.cardStyle}>
      <HorizontalLeftView style={{height: '35%', backgroundColor: cardBackgroundColor}}>
        <VerticalLeftView style={{width: '80%', backgroundColor: cardBackgroundColor}}>  
          <AppTextSmall text={dateString}></AppTextSmall>
          <AppTextSmall text={timeString}></AppTextSmall>
        </VerticalLeftView>

        <LayoutRight style={{width: '20%', backgroundColor: cardBackgroundColor}}>
          <AmountNumberText amount={totalAmount} />
        </LayoutRight>        
      </HorizontalLeftView>
      <View style={{marginRight: 10, height: '35%'}}>
        <AppText numberOfLines={2} text={serviceNames}></AppText>
      </View>      
      <View style={{marginRight: -10, flexDirection: 'row', justifyContent: buttonsJustification}}>
        {
          (options.booking.state == BOOKING_STATE_IN_PROGRESS) &&
          <BookingProgressPicker 
            booking={options.booking}
            setSaveInProgress={options.setSaveInProgress}
          />
        }
        <View style={{marginRight: 10, width: '30%'}}>
          <ViewBookingButton 
            width='100%'
            data={{
              booking: options.booking,
              customer: options.customer,
              serviceNames: serviceNames,
              totalAmount: totalAmount,
              totalDuration: totalDuration,
              serviceNamesArray: serviceNamesArray,
              userContext: options.userContext,
              redirectionCallback: options.redirectionCallback,
              reloadCallback: options.reloadCallback
            }}
          />
        </View>
        {
          options.review && options.booking.state == 'BOOKED' &&
          <View style={{marginRight: 10, width: '30%'}}>
            <KeepBookingButton 
              width='100%'
              booking={options.booking}
              userContext={options.userContext}
              reloadCallback={options.reloadCallback}
              review={options.review}  
              reviewStatus={options.reviewStatus}
              setReviewStatus={options.setReviewStatus} 
              color={options.reviewStatus && options.reviewStatus.keepBookings[options.booking.id] && availableColor}
            />
          </View>
        }  
        {
          options.booking.state == BOOKING_STATE_PENDING &&
          <View style={{marginRight: 10, width: '30%'}}>
            <AcceptBookingButton 
              width='100%'
              booking={options.booking}
              totalAmount={totalAmount}
              userContext={options.userContext}
              reloadCallback={options.reloadCallback}
            />
          </View>
        }
        {
          (options.booking.state == BOOKING_STATE_BOOKED) && canMarkBookingInProgress(options.booking) &&
          <View style={{marginRight: 10, width: '30%'}}>
            <InProgressBookingButton 
              width='100%'
              booking={options.booking}
              userContext={options.userContext}
              reloadCallback={options.reloadCallback}
              review={options.review}  
              reviewStatus={options.reviewStatus}
              setReviewStatus={options.setReviewStatus} 
              color={options.reviewStatus && options.reviewStatus.keepBookings[options.booking.id] && availableColor}
            />
          </View>
        }
        {
          (options.booking.state == 'PENDING' ||
            options.booking.state == 'BOOKED')
           &&        
          <View style={{marginRight: 10, width: '30%'}}>
            <DeclineBookingButton 
              width='100%'
              booking={options.booking}
              userContext={options.userContext}
              reloadCallback={options.reloadCallback}
              disabled={options.reviewStatus && !!options.reviewStatus[options.booking.id]}
              review={options.review}  
              reviewStatus={options.reviewStatus}
              setReviewStatus={options.setReviewStatus}  
              color={options.reviewStatus && !!options.reviewStatus.declinedBookings[options.booking.id] && dangerColor}
            />
          </View>
        }
      </View>      
    </CardView>
  );
}