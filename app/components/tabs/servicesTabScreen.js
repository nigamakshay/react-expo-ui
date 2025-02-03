
import { tabScreenConfig } from 'tabScreenConfig';
import { Entypo } from "@expo/vector-icons";
import { bottomNavTabIconSize, servicesTabIconName } from 'componentStyles';
import i18n from 'i18n-js';

export const servicesTabScreen = () => {
  return {
    ...tabScreenConfig(
    {
      name: i18n.t("services"), 
      displayName: i18n.t("myServices"),
      icon: Entypo,
      iconName: servicesTabIconName,
      iconSize: bottomNavTabIconSize
    })
  }
}