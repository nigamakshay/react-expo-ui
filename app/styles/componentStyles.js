import { linkColor, cardBackgroundColor, themeColor, borderColor, inactiveLinkColor } from "colorStyles";
import { Dimensions } from 'react-native';

export const fontFamily = 'serif'

export const windowWidth = Dimensions.get('window').width;
export const modalWidth = windowWidth * 0.5;

export const appFontSizeBig = 18;
export const appFontSizeMedium = 15;
export const appFontSizeSmall = 12;

export const borderRadiusMedium = '10px';

export const cardProfilePictureSize = 80
export const iconDefaultSize = 20
export const radioIconSize = 12
export const ratingIconSize = 20
export const ratingIconFontSize = 15
export const amountIconSize = 15
export const cartItemCountSize = 20
export const settingsNavigatorIconSize = 24;
export const bottomNavTabIconSize = 24;
export const checkboxIconSize = 24;

export const bookingsTabIconName = 'call'
export const dashboardTabIconName = 'home'
export const settingsNavigatorIcon = 'user'
export const servicesTabIconName = 'add-to-list'

export const headerTitleStyle = { fontWeight: 'bold', color: themeColor }

export const settingsNavigatorIconStyle = { marginRight: 10 }

export const hyperLinkTextStyle = { 
  color: linkColor,
  textDecorationLine: 'underline'   
}

export const hyperLinkTextStyleMedium = { 
  ...hyperLinkTextStyle,
  fontSize: appFontSizeMedium
}

export const inactiveLinkTextStyle = { 
  color: inactiveLinkColor,
  textDecorationLine: 'none'   
}

export const headingStyle1 = {
  fontSize: 20, 
  fontWeight: '500'
}

export const titleStyle = {
  fontSize: appFontSizeMedium, 
  fontWeight: '500'
}

export const bigButtonStyle = {
  width: '50%', 
  fontWeight: 900
}

export const formButtonStyle = {  
  fontSize: '14px',
  height: '40px',
  fontWeight: 900
}

export const cardButtonStyle = {
  height: '30px',
  fontSize: '12px',
  fontWeight: 900
}

export const fieldErrorStyle = {
  marginLeft: 10,
  fontSize: 10,
  color: 'red'
}

export const mandatoryTextStyle = {
  marginLeft: 5,
  fontSize: 10
}

export const cardStyle = {
  cardWidth: '90%',
  cardHeight: '100px',
  borderRadius: '10px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px'
}

export const bigCardStyle = {
  ...cardStyle,
  cardWidth: '95%',
  cardHeight: '180px',
}

export const inputFieldStyle = {
  borderWidth: 1,
  borderRadius: 0.5,
  borderColor: borderColor
}

export const modalStyle = {
  viewContainer: {
    flex: 1,
    width: modalWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor
  }
}
