
import { tabScreenConfig } from 'tabScreenConfig';
import { Zocial } from "@expo/vector-icons";
import { bottomNavTabIconSize, bookingsTabIconName } from 'componentStyles';
import i18n from 'i18n-js';

export const bookingsTabScreen = () => {
  return {
    ...tabScreenConfig(
    {
      name: i18n.t("bookings"), 
      displayName: i18n.t("bookings"),
      icon: Zocial,
      iconName: bookingsTabIconName,
      iconSize: bottomNavTabIconSize
    })
  }
}