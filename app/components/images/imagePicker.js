import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import ImagePickerUtil from 'imagePickerUtil';
import { AppActivityIndicator } from 'appActivityIndicator';
import { iconDefaultColor } from 'colorStyles';
import { themeColor } from 'colorStyles';

export const ImagePicker = (options) => {  
  const [image, setImage] = useState(null);
  const [inProgress, setInProgress] = React.useState(false);

  var viewStyle = {};
  if (options && options.viewStyle) {
    viewStyle = options.viewStyle;
  }

  useEffect(() => {
    options.image && setImage(options.image);    
  }, []);

  const selectImage = async () => {
    setInProgress(true);
    let result = await ImagePickerUtil.selectImage();
    if(result) {
      setImage(result.uri);
      setInProgress(false);
      options && options.setImageContent && options.setImageContent(result);      
    } 
  }

  const deleteImage = () => {
    setImage(null);
    options && options.setImageContent && options.setImageContent(null);
  }

  const cameraIconProperties = {'name': "add-a-photo", 'size': 70, 'color': themeColor, 'float': 'right'}
   
  const cameraIcon = () => {
    return ( <MaterialIcons onPress={selectImage} {...cameraIconProperties} /> );
  }

  const imagePicker = () => {
    return ( <Image source={{ uri: image }} onPress={selectImage} /> );
  }

  return (
    <View style={{ alignItems: 'center', ...viewStyle}}>
      { image && <Image source={{ uri: image }} style={options.imageStyle}/> }
      { image && <MaterialIcons name="delete" size={30} color={iconDefaultColor} onPress={deleteImage}  /> }
      { !image && cameraIcon() }
      { image &&  imagePicker() } 
      { inProgress && <AppActivityIndicator animating={inProgress}/>}                
    </View>  
  );
}