import { BookingCard } from 'bookingCard';
import { AppFlatList } from 'appFlatList';
import { View, LogBox } from 'react-native';
import { bigCardStyle } from 'componentStyles';
import { ViewSeparator } from '../separators/viewSeparator';

export const BookingCardsFlatList = (options) => {

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  function getFlatListSeparator() {
    // return <ViewSeparator/>
    return <View style={{margin: 20}}></View>
  }

  const renderBookingCards = ({item}) => 
          <View style={{flex: 1, alignItems:'center', width: '100%'}}>
            <BookingCard
              userContext={options.userContext}           
              booking={item}
              customer={options.customers && options.customers[item.user_id]}
              reloadCallback={options.reloadCallback}
              cardStyle={{
                disabled: true,
                ...bigCardStyle
              }}
              redirectionCallback={options.redirectionCallback}
              titleStyle={{textAlign: 'left', numberOfLines: 2}}  
              nextScreenIconStyle={{paddingRight: 10, width: 50}}
              review={options.review}  
              reviewStatus={options.reviewStatus}
              setReviewStatus={options.setReviewStatus} 
              setSaveInProgress={options.setSaveInProgress}       
            />
          </View>;

  return (
    <View style={{width: '100%', height: '85%'}}>
      <AppFlatList
        contentContainerStyle={{alignItems:"stretch"}}
        separatorView={() => getFlatListSeparator()}
        data={options.data || []}
        renderItem={renderBookingCards}
      />
    </View>
  );
}