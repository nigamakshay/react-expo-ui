
import i18n from 'i18n-js';
import { cardBackgroundColor } from 'colorStyles';
import React, { useContext } from 'react';
import { PressableButton } from 'pressableButton';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';

export const CancelButton = (options) => {
  
  const userContext = useContext(AuthenticatedUserContext);
  
  return (
    <PressableButton
      fontWeight={600}
      width={options.width}
      height={options.height}
      disabled={options.disabled}
      bgColor={!options.setColorOn && cardBackgroundColor}
      text={options.text || i18n.t("cancel")}
      onPress={() => {options.onPress({...options, bearerToken: userContext.bearerToken})}}
    />
  );
}

