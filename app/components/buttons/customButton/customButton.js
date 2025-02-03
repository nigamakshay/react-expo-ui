
import { iconsColor, themeColor } from 'colorStyles';
import { iconDefaultSize } from 'componentStyles';

export const customButton = (options) => {

  return <options.iconType
    name={options.iconName}
    size={options.size || iconDefaultSize}
    disabled={options.disabled || false}
    color={options.color || iconsColor || themeColor}
    onPress={() => {options.onPress && options.onPress()}}
  />
}
