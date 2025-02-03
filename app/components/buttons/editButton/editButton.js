
import { customButton } from 'customButton';
import { Entypo } from '@expo/vector-icons';

export const EditButton = (options) => {

  return customButton({ 
    iconType: Entypo ,
    iconName:  "edit",
    onPress: options.onPress
  })
  
}
