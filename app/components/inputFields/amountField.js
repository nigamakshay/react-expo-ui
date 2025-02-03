import { NumericField } from 'numericField';

export const AmountField = (options) => {

  return <NumericField 
    width = { options.width || '100px' }
    placeholder = { options.placeholder || 'Rs.' } //ToDo: Add currency support based on country
    onChangeText = { (value) => { options.onChangeText(value) } } 
    value = {options.value && options.value + ''} 
  />
}