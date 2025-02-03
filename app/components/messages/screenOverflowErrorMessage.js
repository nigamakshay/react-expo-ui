
import i18n from 'i18n-js';
import { ScreenOverflowMessage } from 'screenOverflowMessage';

export const ScreenOverflowErrorMessage = (options) => {

  return <ScreenOverflowMessage 
    text={options.text || i18n.t("errorAlert")}
    textColor='red'
    onPress={options.callback}
  />;
};
 