import { HyperLinkText } from 'hyperLinkText';
import { emailPasswordResetOtp } from '../../utils/otp/emailPasswordResetOtp';

export const ForgotPasswordLink = (options) => {

  return (<HyperLinkText
    active={true}
    textKey={'forgotPasswordLink'}
    onPress={options.onPress}
  />);
}
