
import { customButton } from 'customButton';
import { MaterialIcons } from '@expo/vector-icons';

export const DeleteButton = (options) => {

  return customButton({ 
    iconType: MaterialIcons ,
    iconName:  "delete",
    onPress: options.onPress
  })
  
}
