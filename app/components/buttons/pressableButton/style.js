import styled from 'styled-components/native';
import { themeColor } from 'colorStyles';
import { fontFamily } from 'componentStyles';

export const ButtonContainer = styled.TouchableOpacity`  
  margin: ${props => props.margin || '0px 0px 0px 0px'};
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '45px'};
  padding: ${props => '0px'};
  border-radius: ${props => props.borderRadius || '20px'};
  background-color: ${props => props.bgColor || themeColor};
  justifyContent: ${props => props.justifyContent || 'center'};
`;

export const ButtonText = styled.Text`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || '16px'};
  text-align: ${props => props.textAlign || 'center'};
  font-weight: ${props => props.fontWeight || 400};
  font-family: ${props => props.fontFamily || fontFamily};
`;
