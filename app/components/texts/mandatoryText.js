import I18n from 'i18n-js';
import { AppTextSmall } from 'appTextSmall';
import { MandatoryIcon } from 'mandatoryIcon';
import { mandatoryTextStyle } from 'componentStyles';
import { HorizontalLeftView } from 'containerStyles' ;

export const MandatoryText = (options) => {

  return (
    <HorizontalLeftView>
      <AppTextSmall style={{ ...mandatoryTextStyle, ...options.style, paddingTop: 5}}
        text={I18n.t(options.text)}>
      </AppTextSmall>
      <MandatoryIcon/>
    </HorizontalLeftView>
  );
}
