
import { tabScreenConfig } from 'tabScreenConfig';
import { Entypo } from "@expo/vector-icons";
import { bottomNavTabIconSize, settingsTabIconName } from 'componentStyles';
import i18n from 'i18n-js';

export const settingsTabScreen = () => {
  return {
    ...tabScreenConfig(
    {
      name: i18n.t("settings"), 
      displayName: i18n.t("mySettings"),
      icon: Entypo,
      iconName: settingsTabIconName,
      iconSize: bottomNavTabIconSize
    })
  }
}