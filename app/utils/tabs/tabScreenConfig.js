import { Text } from 'react-native';
import { AppText } from '../../components/texts/appText';
import { 
  themeColor,
  themeTabFocusedColor, 
  themeTabFocusedOutColor, 
  themeTabFocusedTextColor, 
  themeTabFocusedOutTextColor 
} from 'colorStyles';
import { headerColor } from 'colorStyles';

export const tabScreenConfig = (options) => {
    return {
      name: options.name,
      component: options.component,     
      options: {
        headerStyle: {
          backgroundColor: headerColor, //Main screens header background color
        },
        tabBarLabel: (tabInfo) => (
            <AppText 
              text={ options.displayName }
              style = {{
              color: tabInfo.focused ? 
              options.tabFocusedTextColor || themeTabFocusedTextColor : 
              options.tabFocusedTextOutColor || themeTabFocusedOutTextColor
            }}>
            
            </AppText>
          ),                
        tabBarIcon: (tabInfo) => {
          return (
            <options.icon 
              name = {options.iconName}
                size = {options.iconSize}
                color = { 
                  tabInfo.focused ? 
                  options.tabFocusedColor || themeTabFocusedColor || themeColor: 
                  options.tabFocusedOutColor || themeTabFocusedOutColor
                }
            />
          )         
        }
      }
    }  
}

