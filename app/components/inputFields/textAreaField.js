import { InputField } from 'inputField';
import { placeholderTextColor } from 'colorStyles';

export const TextAreaField = (options) => {

  return <InputField 
    width = { options.width || '300px' }
    height = { options.height || '100px' }    
    value = { options.value || ''} 
    placeholder = { options.placeholder } 
    placeholderTextColor={placeholderTextColor}
    multiline = { options.multiline || true } 
    numberOfLines = { options.numberOfLines || 5 } 
    maxLength = { options.maxLength || 500 } 
    textAlignVertical = 'top'
    onChangeText = { (text) => {
      options.onChangeText(text);
    }}
  />
}