import { checkboxCheckedColor } from 'colorStyles';
import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from 'react';
import { AppText } from 'appText';
import { LayoutLeftAlignCenter } from 'containerStyles';
import { themeColor, disabledColor } from 'colorStyles';
import { CheckboxIcon } from 'checkboxIcon';

export const AppCheckbox = (options) => {

  const [isChecked, setChecked] = useState(false);
  
  useEffect(() => {
    setChecked(options.isChecked);     
  }, [options.isChecked]);

  function onValueChange() {
    setChecked(!isChecked);
    options.onPress && options.onPress(!isChecked);
  }

  let textStyle = options.textStyle;
  if(!textStyle) {
    textStyle = {color: options.disabled ? disabledColor : themeColor}
  }
  
  let checkboxColor = options.disabled
    ? disabledColor
    : options.isChecked
    ? checkboxCheckedColor
    : themeColor;
  
  return (
    <LayoutLeftAlignCenter style={options.containerStyle}>
      {options.disabled && <CheckboxIcon disabled={options.disabled}/>}

      {!options.disabled && <Checkbox
        value={isChecked}
        disabled={options.disabled || false}
        onValueChange={() => onValueChange()}
        color={checkboxColor}       
        marginRight={options.marginRight || 2}
        marginLeft={options.marginLeft || 2}        
      />}

      <AppText 
        style={{...textStyle, ...options.style}}
        onPress={() => !options.disabled && onValueChange()}
        text={options.text}>
      </AppText>
    </LayoutLeftAlignCenter>
  );
}