import i18n from 'i18n-js';
import { hyperLinkTextStyle, inactiveLinkTextStyle } from 'componentStyles';
import { AppTextSmall } from 'appTextSmall';

export const HyperLinkText = (options) => {

  let linkStyle = options.active ? hyperLinkTextStyle : inactiveLinkTextStyle;
  return (
    <AppTextSmall style={{...linkStyle, ...options.style}}
      onPress={options.active ? options.onPress : null}
      text={options.textKey ? i18n.t(options.textKey) : options.text}>      
    </AppTextSmall>
  );
}