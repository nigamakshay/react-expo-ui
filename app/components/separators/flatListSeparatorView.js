
import { View } from 'react-native';
import { screenBackgroundColor } from 'colorStyles';

export const FlatListSeparatorView = (options) => {
  return (
    <View
      style={{
        height: options.separatorHeight || 1,
        width: options.separatorWidth || '100%',
        backgroundColor: options.separatorColor || screenBackgroundColor,
      }}
    />
    );
  };