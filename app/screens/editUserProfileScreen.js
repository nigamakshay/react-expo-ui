import { editUserProfile } from 'editUserProfile';
import { UserProfileForm } from 'userProfileForm';;
import { View, Text } from 'react-native';
import { FullContainer } from 'containerStyles';

export const EditUserProfileScreen = ({navigation, route}) => {

  return (
    <FullContainer>
      <View style={{width: '95%', marginTop: 20}}>    
        <UserProfileForm
          actionMethod={editUserProfile}
          {...route.params}       
        />
      </View>
    </FullContainer>
  );
}