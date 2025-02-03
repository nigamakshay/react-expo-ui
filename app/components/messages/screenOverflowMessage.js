import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { popupBackgroundColor } from 'colorStyles'; 

export const ScreenOverflowMessage = (options) => {
  if (!options.text) {
    return null;
  }

  return (<TouchableOpacity 
          style = {
            [
              StyleSheet.absoluteFill,
              {
                backgroundColor: options.backroundColor || popupBackgroundColor,
                justifyContent: 'center'
              },              
            ]
          }
          onPress={() => {options.onPress && options.onPress();}}>
          <Text
            style={{
              color: options.textColor || 'blue',
              fontSize: options.textFontSize || 17,
              textAlign: options.textAlign || 'center',
              margin: options.textMargin || 20,
            }}>
            {options.text}
          </Text>
         </TouchableOpacity>);
};