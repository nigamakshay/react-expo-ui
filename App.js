import Routes from 'index';

import i18n from 'i18n-js';
import { en } from './assets/i18n/locale';
import * as Localization from 'expo-localization';
import { ScrollView } from 'react-native';
import { LogBox } from 'react-native';

i18n.fallbacks = true;
i18n.translations = { en };
i18n.locale = Localization.locale;

export default function App() {

  LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    
  return <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'>
    <Routes/>
  </ScrollView>
}


 