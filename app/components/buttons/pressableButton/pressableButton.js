import React from 'react';
import { ButtonContainer, ButtonText } from './style.js';
import { cardBackgroundColor } from 'colorStyles';

export const PressableButton = (options) => (

  <ButtonContainer 
    onPress={options.onPress} 
    bgColor={options.bgColor || (
      options.hasOwnProperty('setColorOn') && !options.setColorOn && cardBackgroundColor
    )}
    width={options.width}
    height={options.height}
    margin={options.margin || '10px 0 10px 0'}
    padding={options.padding}
    borderRadius={options.borderRadius}
    disabled={options.disabled || false}
  >
    <ButtonText 
      fontSize={options.fontSize} 
      color={options.fontColor} 
      textAlign={options.textAlign}
      fontWeight={options.fontWeight}
    > 
      {options.text} 
    </ButtonText>
  </ButtonContainer>
);