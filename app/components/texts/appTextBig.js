import { Text } from 'react-native';
import { fontColor } from 'colorStyles';
import { fontFamily, appFontSizeBig } from 'componentStyles';

export const AppTextBig = (options) => {
  return (
    <Text style={{
      fontFamily: fontFamily,
      fontSize: appFontSizeBig,
      color: fontColor,
      ...options.style
      }}
      onPress={options.onPress}>
      {options.text}
    </Text>
  );
}
