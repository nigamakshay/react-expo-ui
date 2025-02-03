import styled from 'styled-components/native';
import { themeColor, borderColor } from 'colorStyles';

export const InputField = styled.TextInput`
    height: ${props => props.height || '40px'};
    margin: ${props => props.margin || '10px 0px 0px 0px'};
    width: ${props => props.width || '300px'};
    borderWidth: ${props => props.borderWidth || '.5px'};
    borderRadius: ${props => props.borderRadius || '10px'};
    borderColor: ${props => props.borderColor || borderColor}; 
    padding: ${props => props.padding || '5px'};
    textAlignVertical: ${props => props.textAlignVertical || 'center'};
    color: ${props => props.color || themeColor}; 
`;