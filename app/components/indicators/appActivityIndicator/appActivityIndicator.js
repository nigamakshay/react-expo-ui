import { ActivityIndicator } from 'react-native';
import { themeColor } from 'colorStyles';

export const AppActivityIndicator = (options) => {
  
  return (
    <ActivityIndicator
      size={options.size || "large"}
      color={options.color  || themeColor}
      animating={options.animating}
    />
  );
}