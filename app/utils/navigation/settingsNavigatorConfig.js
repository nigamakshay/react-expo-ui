import { useNavigation } from '@react-navigation/native';
import { themeColor, footerColor } from 'colorStyles';
import { tabBarActiveTintColor, tabBarInactiveTintColor } from 'colorStyles';

export const settingsNavigatorConfig = (options) => {
  const navigation = useNavigation();

  return {
    screenOptions:{ 
      headerRight: () => (
        <options.icon
          name = {options.iconName}
          size = {options.iconSize}
          style = {options.style}
          color = { options.color || themeColor}
          onPress = {() => navigation.navigate(options.nextScreen)}
        />
      ),
      headerTitleStyle: options.headerTitleStyle,
      tabBarStyle: {
        backgroundColor: footerColor,
      },
      tabBarActiveTintColor: tabBarActiveTintColor,
      tabBarInactiveTintColor: tabBarInactiveTintColor,
    }
  }
}