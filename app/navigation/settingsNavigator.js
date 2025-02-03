import { settingsNavigatorConfig } from 'settingsNavigatorConfig';
import { FontAwesome } from "@expo/vector-icons";
import { headerTitleStyle, 
  settingsNavigatorIconSize, 
  settingsNavigatorIconStyle, 
  settingsNavigatorIcon 
} from 'componentStyles';

export const settingsNavigator = () => {
  return {
    ...settingsNavigatorConfig({
      icon: FontAwesome,
      iconName: settingsNavigatorIcon,
      iconSize: settingsNavigatorIconSize,
      style: settingsNavigatorIconStyle,
      nextScreen: 'SettingsScreen',
      headerTitleStyle: headerTitleStyle
    })
  }
}