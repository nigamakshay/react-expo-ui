
import { HorizontalView } from 'containerStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { ratingIconSize, ratingIconFontSize } from 'componentStyles';
import { availableColor } from 'colorStyles';

export const LocationIcon = (options) => {

  return (
    <HorizontalView {...options.viewStyle}>
      <MaterialIcons 
        name={options.iconName || 'location-on'}
        size={options.iconSize || ratingIconSize}
        color={options.iconColor || availableColor}      
      />      
    </HorizontalView>
  );
}