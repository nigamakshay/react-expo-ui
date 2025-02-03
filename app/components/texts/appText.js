import { Text } from 'react-native';
import { fontColor } from 'colorStyles';
import { fontFamily, appFontSizeMedium } from 'componentStyles';

export const AppText = (options) => {
  return (
    <Text style={{
      fontFamily: fontFamily,
      fontSize: appFontSizeMedium,
      color: fontColor,
      ...options.style
      }}
      onPress={options.onPress}
      numberOfLines={options.numberOfLines}>
      {options.text}
    </Text>
  );
}
