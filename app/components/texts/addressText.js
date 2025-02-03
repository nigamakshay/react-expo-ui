
import { View, Text } from 'react-native';
import { LocationIcon } from 'locationIcon';
import { AppTextSmall } from 'appTextSmall';

export const AddressText = (options) => {
  
  return (
    <View {...options.viewStyle}>
      <LocationIcon/>
      <AppTextSmall
        text={options.location && options.location.googleAddress}>
      </AppTextSmall>
    </View>
  );
}
