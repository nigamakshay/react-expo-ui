
import { FlatList } from 'react-native';
import { FlatListSeparatorView } from 'flatListSeparatorView';

export const AppFlatList = (options) => {

  return (
    <FlatList      
      ItemSeparatorComponent={options.separatorView || FlatListSeparatorView}
      contentContainerStyle={options.contentContainerStyle || {}}
      numColumns={options.numColumns || 0}
      data={options.data || []}
      keyExtractor={(item, index) => index.toString()}
      renderItem={options.renderItem}
    />
  );  
}
