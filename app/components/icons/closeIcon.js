
import { AntDesign } from '@expo/vector-icons';
import { iconDefaultSize } from 'componentStyles';
import { iconDefaultColor } from 'colorStyles';

export const CloseIcon = (options) => {

  return (
    <AntDesign 
      name="closecircleo" 
      size={options.iconSize || iconDefaultSize}
      color={options.iconColor || iconDefaultColor}
      style={options.style}
      onPress={options.onPress}
    />
  );
}