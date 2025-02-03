import * as ImagePicker from 'expo-image-picker';
import { showErrorMessage } from 'showErrorMessage';

export default class ImagePickerUtil {

  static selectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.1,
        base64: true
      });

      if (!result.canceled) {
        return {'uri': result.assets[0].uri, 'base64':result.assets[0].base64};
      }
    } catch(error) {
      showErrorMessage();
    }
  };
}
