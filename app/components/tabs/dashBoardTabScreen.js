
import { tabScreenConfig } from 'tabScreenConfig';
import { Ionicons } from "@expo/vector-icons";
import { bottomNavTabIconSize, dashboardTabIconName } from 'componentStyles';
import i18n from 'i18n-js';

export const dashBoardTabScreen = () => {
  return {
    ...tabScreenConfig(
    {
      name: i18n.t("home"), 
      displayName: i18n.t("dashboard"),
      icon: Ionicons,
      iconName: dashboardTabIconName,
      iconSize: bottomNavTabIconSize
    })
  }
}