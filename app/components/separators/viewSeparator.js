import { View } from 'react-native';
import { themeLightColor } from 'colorStyles';

export const ViewSeparator = (options) => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          marginTop: options.margin || 25,
          marginBottom: options.margin || 25,
          backgroundColor: themeLightColor,
        }}
      />
    );
  };