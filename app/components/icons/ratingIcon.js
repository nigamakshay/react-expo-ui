import { Entypo } from '@expo/vector-icons';
import { iconDefaultSize } from 'componentStyles';
import { ratingDeSelectedColor, ratingSelectedColor } from 'colorStyles';
import React from 'react';

export const RatingIcon = (options) => {
  
  return (
    <Entypo 
      name="star" 
      size={options.iconSize || iconDefaultSize}
      color={options.rating >= options.ratingValue ? ratingSelectedColor : ratingDeSelectedColor}
      style={options.style}
      onPress={() => {return;       
        if (options.rating > options.ratingValue) {
          options.setRating(options.ratingValue);
        } if (options.rating == options.ratingValue) {
          options.setRating(options.ratingValue - 1);
        } else {
          options.setRating(options.ratingValue);
        }        
      }}
    />    
  );
}