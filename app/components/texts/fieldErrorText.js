import I18n from 'i18n-js';
import { fieldErrorStyle } from 'componentStyles';
import { AppTextSmall } from 'appTextSmall';

export const FieldErrorText = (options) => {
  
  return (
    <AppTextSmall style={fieldErrorStyle} text={I18n.t(options.text)}>
    </AppTextSmall>
  );
}