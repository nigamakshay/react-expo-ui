
import styled from 'styled-components/native';
import { cardBackgroundColor, cardBorderColor, themeColor } from 'colorStyles';

export const CardView = styled.TouchableOpacity`
  flex: ${props => props.flex || '1'}
  width: ${props => props.cardWidth || '100px'} 
  height: ${props => props.cardHeight || '100px'}   
  padding: ${props => props.padding || '10px'}
  margin: ${props => props.margin || '10px'}
  borderWidth: ${props => props.borderWidth || '2px'}
  borderColor: ${props => props.borderColor || cardBorderColor}
  backgroundColor: ${props => props.backgroundColor || cardBackgroundColor}
  borderRadius:  ${props => props.borderRadius || '0'}
  borderBottomLeftRadius: ${props => props.borderBottomLeftRadius || '0'}
  borderBottomRightRadius: ${props => props.borderBottomRightRadius || '0'}
`;

export const CardTitle = styled.Text`
  width: ${props => props.cardWidth || '90%'} 
  fontWeight: ${props => props.fontWeight || 'normal'}
  padding: ${props => props.padding || '0px'}
  font-size: ${props => props.fontSize || '17px'}
  text-align: ${props => props.textAlign || 'center'}
  color: ${props => props.cardTitleColor || themeColor}
`; 

export const CardDescription = styled.Text`
  fontWeight: ${props => props.fontWeight || 'normal'}
  padding: ${props => props.padding || '0px'}
  font-size: ${props => props.fontSize || '15px'}
  text-align: ${props => props.textAlign || 'center'}
  color: ${props => props.cardTitleColor || themeColor}
`;