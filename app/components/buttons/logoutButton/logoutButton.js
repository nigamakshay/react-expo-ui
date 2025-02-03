import { PressableButton } from 'pressableButton';
import { logout } from 'logoutService';
import i18n from 'i18n-js';
import { bigButtonStyle } from 'componentStyles';

export const LogoutButton = (options) => (
  <PressableButton 
    onPress={() => logout(options)}
    text={i18n.t("logout")}
    bgColor={options.color}
    {...bigButtonStyle}
  />
);