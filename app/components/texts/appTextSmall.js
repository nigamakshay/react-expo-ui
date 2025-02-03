import { Text } from 'react-native';
import { fontColor } from 'colorStyles';
import { fontFamily, appFontSizeSmall } from 'componentStyles';

export const AppTextSmall = (options) => {
  return (
    <Text style={{
      fontFamily: fontFamily,
      fontSize: appFontSizeSmall,
      color: fontColor,
      ...options.style
      }}
      onPress={options.onPress}>
      {options.text}
    </Text>
  );
}
