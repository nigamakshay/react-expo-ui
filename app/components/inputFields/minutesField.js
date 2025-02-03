import { NumericField } from 'numericField';
import i18n from 'i18n-js';

export const MinutesField = (options) => {

  return <NumericField 
    width = { options.width || '100px' }
    placeholder = { options.placeholder && i18n.t(options.placeholder) || i18n.t('minutes') } //ToDo: Add currency support based on country    
    onChangeText = { (value) => { options.onChangeText(value) } } 
    value = {options.value && options.value + ''} 
  />
}