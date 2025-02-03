import { HyperLinkText } from 'hyperLinkText';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';

export const PrivacyLink = (options) => {

  const [result, setResult] = useState(null);

  return (<HyperLinkText
    active={true}
    textKey={'privacyLink'}
    onPress={async () => {
      let result = await WebBrowser.openBrowserAsync('https://your-domain.com/privacy-policy')
    }}
  />);
}