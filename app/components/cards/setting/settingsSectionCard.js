import i18n from 'i18n-js';
import { EditLink } from 'editLink';
import { DeleteLink } from 'deleteLink';
import { ViewLink } from 'viewLink';
import { Text, View } from 'react-native';
import { AppTitleText } from 'appTitleText';
import { AppTextSmall } from 'appTextSmall';
import { titleStyle } from 'componentStyles';
import { useNavigation } from '@react-navigation/native';
import { VerticalView, 
  VerticalLeftView, 
  HorizontalLeftView, 
  HorizontalRightView 
} from 'containerStyles';

export const SettingsSectionCard = (options) => {

  const navigation = useNavigation();
  const textStyle = options.actionRequired ? {color: 'red'} : {};

  return (
    <HorizontalLeftView style={{margin: 10, marginTop: 30}}>
      <VerticalView style={{width: '80%'}}>
        <VerticalLeftView style={{width: '100%'}}>
          <AppTitleText text={options.title} style={titleStyle}>            
          </AppTitleText>

          <AppTextSmall text={options.text} numberOfLines={2} style={textStyle}>            
          </AppTextSmall>
        </VerticalLeftView>
      </VerticalView>

      <HorizontalRightView style={{width: '20%'}}>
        <VerticalView>
          { 
            options.edit && 
            <EditLink 
              nextScreen={options.nextScreen}
              text={options.actionRequired && i18n.t('add')}
              navigationParams={options.navigationParams}
            />
          }
          {
            options.view &&
            <ViewLink 
              nextScreen={options.nextScreen}
              style={{marginTop: 10}}
            />
          }          
          {
            !options.actionRequired && options.delete &&
            <DeleteLink 
              deleteAction={options.deleteAction}
              style={{marginTop: 10}}           
            />
          }
        </VerticalView>
      </HorizontalRightView>    
    </HorizontalLeftView>
  );
}