
import i18n from 'i18n-js';
import { AppTextBig } from 'appTextBig';

export const DataNotFoundMessage = (options) => {
  
  return (
    <AppTextBig text={options.text || i18n.t('dataNotFound')}></AppTextBig>
  );
}