
import { tabScreenConfig } from 'tabScreenConfig';
import { Zocial } from "@expo/vector-icons";
import { bottomNavTabIconSize, bookingsTabIconName } from 'componentStyles';
import i18n from 'i18n-js';

export const servicesTabScreen = () => {
  return {
    ...tabScreenConfig(
    {
      name: i18n.t("services"), 
      displayName: i18n.t("services"),
      icon: Zocial,
      iconName: bookingsTabIconName,
      iconSize: bottomNavTabIconSize
    })
  }
}