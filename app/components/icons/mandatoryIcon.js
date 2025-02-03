import { Text } from 'react-native';
import { dangerColor } from 'colorStyles';

export const MandatoryIcon = () => {
  return <Text style={{color: dangerColor}}> *</Text>;
}