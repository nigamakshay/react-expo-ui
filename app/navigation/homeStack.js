import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigator } from 'homeStackNavigator';
import { SettingsScreen } from 'settingsScreen';
import { EditUserProfileScreen } from 'editUserProfileScreen';
import { UserAddressesScreen } from 'userAddressesScreen';
import { LocationSelectionScreen } from 'locationSelectionScreen';
import { UserAddressForm } from 'userAddressForm';
import i18n from 'i18n-js';
import { themeColor, headerColor } from 'colorStyles';

const Stack = createNativeStackNavigator();
 
export const HomeStack = (options) => {

  return (      
    <Stack.Navigator screenOptions={{
        headerTintColor: themeColor, //Nested screens header font color
        headerStyle: {
          backgroundColor: headerColor, //Nested screens header background color
        },
      }}>
      <Stack.Screen 
        name = "HomeStackNavigator" 
        component = {HomeStackNavigator} 
        options={{ headerShown: false }} />

      <Stack.Screen 
        name="SettingsScreen" 
        component={SettingsScreen} 
        options={{ title: i18n.t("settings") }} />

      <Stack.Screen 
        name="EditUserProfileScreen" 
        component={EditUserProfileScreen} 
        options={{ title: i18n.t("editProfile") }} />

      <Stack.Screen 
        name="UserAddressesScreen" 
        component={UserAddressesScreen} 
        options={{ title: i18n.t("editAddress") }} />
      <Stack.Screen 
        name="UserAddressForm" 
        component={UserAddressForm} 
        options={{ title: i18n.t("editAddress") }} />        

      <Stack.Screen 
        name="LocationSelectionScreen" 
        component={LocationSelectionScreen} 
        options={{ title: i18n.t("selectLocation") }} />


    </Stack.Navigator>
  );
}