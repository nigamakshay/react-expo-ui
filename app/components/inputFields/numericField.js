import { placeholderTextColor } from 'colorStyles';
import { InputField } from 'inputField';

export const NumericField = (options) => {

  return <InputField     
    width = { options.width || '50px' }
    value = { options.value || '' } 
    placeholder = { options.placeholder }
    placeholderTextColor={placeholderTextColor}
    keyboardType = "phone-pad"
    onChangeText = { (text) => {
      text = text.replace(/[^0-9]/g, '');
      options.onChangeText(text);
    }}
  />
}