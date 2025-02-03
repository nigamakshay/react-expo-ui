import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import i18n from 'i18n-js';
import { themeColor, dropdownSelectedItemColor } from 'colorStyles';
import { View } from 'react-native';
import { inputFieldStyle } from 'componentStyles';

export const AppPicker = (options) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const pickerItems = [
    <Picker.Item
      key={0}
      label={i18n.t(options.label)}
      value={null}
      style={{color: dropdownSelectedItemColor}}
    />,
    ...options.pickerData
  ];

  return <View style={inputFieldStyle}>
    <Picker
      dropdownIconColor={themeColor}
      dropdownIconRippleColor={themeColor}
      selectedValue={selectedLanguage || options.defaultValue}
      onValueChange={(itemValue, itemIndex) => {
        if (!itemValue) return;
        setSelectedLanguage(itemValue);
        options.onValueChange(itemValue);
      }
    }>

    {pickerItems}
    </Picker>
  </View>
}
