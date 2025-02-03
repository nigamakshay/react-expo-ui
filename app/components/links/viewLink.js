import i18n from 'i18n-js';
import { AppText } from 'appText';
import { titleStyle } from 'componentStyles';
import { useNavigation } from '@react-navigation/native';
import { actionTextColor } from 'colorStyles';

export const ViewLink = (options) => {
  const navigation = useNavigation();

  return (
    <AppText 
      style={{...titleStyle, ...options.style, color: actionTextColor}}
      onPress={() => navigation.navigate(
        options.nextScreen,
        {...options.navigationParams}
      )}
      text={options.text || i18n.t("view")}>      
    </AppText>
  );
}