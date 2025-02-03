import Ionicons from '@expo/vector-icons/Ionicons';
import { checkboxIconSize } from 'componentStyles';
import { themeColor, disabledColor } from 'colorStyles';

export const CheckboxIcon = (options) => {

  return (
    <Ionicons
      name="checkbox-outline"
      size={checkboxIconSize}
      color={options.disabled ? disabledColor : themeColor}/>
  );
}
