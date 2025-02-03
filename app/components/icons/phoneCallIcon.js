import i18n from 'i18n-js';
import { Text  } from 'react-native';
import { Zocial } from '@expo/vector-icons';
import { iconDefaultSize } from 'componentStyles';
import { iconDefaultColor } from 'colorStyles';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { HorizontalView } from '../../styles/containerStyles';
import { AppTextSmall } from 'appTextSmall';

export const PhoneCallIcon = (options) => {

  function callNumber() {
    RNImmediatePhoneCall.immediatePhoneCall(options.phone);
  }

  return (
    <HorizontalView>
    <Zocial 
      name="call" 
      size={options.iconSize || iconDefaultSize}
      color={options.iconColor || iconDefaultColor}
      style={options.style}
      onPress={() => callNumber()}
    />
    {options.text && <AppTextSmall onPress={() => callNumber()} text={i18n.t(options.text)}></AppTextSmall>}
    </HorizontalView>
  );
}
