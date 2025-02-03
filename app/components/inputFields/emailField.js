
import { useState } from 'react';
import { InputField } from 'inputField';
import { placeholderTextColor } from 'colorStyles';

export const EmailField = (options) => {

  return <InputField 
    width={options.width || '100%'}
    height={options.height || '50px'}
    value={options.value || ''} 
    placeholder={options.placeholder} 
    placeholderTextColor={placeholderTextColor}
    multiline={options.multiline || false} 
    numberOfLines={1} 
    maxLength={options.maxLength || 100} 
    onChangeText={(text) => {
      options.onChangeText(text);
    }}
  />
}