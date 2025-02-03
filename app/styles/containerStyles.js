import styled from 'styled-components/native';
  import { containerBackgroundColor} from 'colorStyles';

export const CenterContainer = styled.View`
  flex: 1;  
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: ${containerBackgroundColor};
`;

export const FullContainer = styled.View`
  flex: 1;  
  align-items: center;
  background-color: ${containerBackgroundColor};
`;

export const HorizontalView = styled.View`
  flexDirection: row;  
  align-items: center;
  background-color: ${containerBackgroundColor};
`;

export const HorizontalLeftView = styled.View`
  flexDirection: row;
  justify-content: flex-start;
  background-color: ${containerBackgroundColor};
`;

export const HorizontalRightView = styled.View`
  flexDirection: row;
  justify-content: flex-end;
  background-color: ${containerBackgroundColor};
`;

export const HorizontalCenterView = styled.View`
  flexDirection: row;  
  align-items: center;
  justify-content: center;
  background-color: ${containerBackgroundColor};
`;

export const VerticalView = styled.View`
  flexDirection: column;
  align-items: center;
  background-color: ${containerBackgroundColor};
`;

export const VerticalLeftView = styled.View`
  flexDirection: column;
  alignItems: flex-start;  
  background-color: ${containerBackgroundColor};
`;

export const VerticalRightView = styled.View`
  flexDirection: column;
  alignItems: flex-end; 
  background-color: ${containerBackgroundColor}; 
`;

export const VerticalBottomView = styled.View`
  flexDirection: column;
  justifyItems: flex-end;  
  background-color: ${containerBackgroundColor};
`;

export const LayoutLeft = styled.View`
  flexDirection: row;
  margin: 2px;
  background-color: ${containerBackgroundColor};
`;

export const LayoutRight = styled.View`
  flexDirection: row;
  margin: 2px;
  justify-content: flex-end;
  background-color: ${containerBackgroundColor};
`;

export const LayoutLeftAlignCenter = styled.View`
  flexDirection: row;
  align-items: center;
  background-color: ${containerBackgroundColor};
`;

export const LeftView = styled.View`
  align-items: flex-start;  
  margin: 20px;
  max-height: 95%;
  overflow: scroll;
  background-color: ${containerBackgroundColor};
`;

export const VerticalScrollView = styled.ScrollView`
  width: 100%;
  flexDirection: column;
  background-color: ${containerBackgroundColor};
`;

export const AddressListContainerView = styled.View`
  overflow: scroll;
  max-height: 80%; 
  background-color: ${containerBackgroundColor};
`;

export const LengthyTextInput = styled.TextInput`
    height: 40px;
    margin-top: 10px;
    width: 300px;
    borderWidth: 1px;
    padding: 10px
`;

export const TopContainer = styled.View`   
  width: 100%;
  margin: 5px 0 5px 0;
  background-color: ${containerBackgroundColor};
`;
