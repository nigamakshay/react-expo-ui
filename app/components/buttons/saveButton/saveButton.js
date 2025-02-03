import i18n from 'i18n-js';
import { disabledColor } from 'colorStyles';
import React, { useContext } from 'react';
import { PressableButton } from 'pressableButton';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { bigButtonStyle } from 'componentStyles';

export const SaveButton = (options) => {
  
  const userContext = useContext(AuthenticatedUserContext);
  let style = options.style || bigButtonStyle;

  return (
    <PressableButton
      fontWeight={600}
      width={options.width}
      height={options.height}
      fontColor={options.fontColor}
      disabled={options.disabled}
      bgColor={!options.setColorOn && disabledColor || options.bgColor}
      text={(options.text && i18n.t(options.text)) || i18n.t("save")}
      {...style}
      onPress={() => {options.onPress({...options, bearerToken: userContext.bearerToken})}}
    />
  );
}

