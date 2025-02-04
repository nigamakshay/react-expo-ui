module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
               ["module:react-native-dotenv", {
                 "moduleName": "@env",
                 "path": ".env",
                 "blacklist": null,
                 "whitelist": null,
                 "safe": false,
                 "allowUndefined": true
               }],
               [
                'module-resolver',
                  {          
                    alias: {
                      'appContext': './app/appContext',
                      'firebaseModule': './config/firebase',

                      'index': './app/navigation/index',
                      'authStack': './app/navigation/authStack',
                      'homeStack': './app/navigation/homeStack',
                      'homeStackNavigator': './app/navigation/homeStackNavigator',
                      'rootNavigator': './app/navigation/rootNavigator',
                      'drawerNavigator': './app/navigation/drawerNavigator',
                      'authenticatedUserProvider': './app/navigation/authenticatedUserProvider',
                      'settingsNavigator': './app/navigation/settingsNavigator',

                      'setupNotifications': './app/notifications/setupNotifications',

                      'ratingNumberIcon': './app/components/icons/ratingNumberIcon.js',
                      'nextScreenIcon': './app/components/icons/nextScreenIcon.js',
                      'locationIcon': './app/components/icons/locationIcon.js',
                      'mandatoryIcon': './app/components/icons/mandatoryIcon.js',
                      'ratingIcon': './app/components/icons/ratingIcon.js',
                      'phoneCallIcon': './app/components/icons/phoneCallIcon.js',
                      'closeIcon': './app/components/icons/closeIcon.js',
                      'checkboxIcon': './app/components/icons/checkboxIcon.js',

                      'imagePicker': './app/components/images/imagePicker.js',

                      'containerStyles': './app/styles/containerStyles',
                      'componentStyles': './app/styles/componentStyles',
                      'colorStyles': './app/styles/colorStyles',
                      'buttonStyles': './app/styles/buttonStyles',
                      
                      'pressableButton': './app/components/buttons/pressableButton/pressableButton.js',
                      'logoutButton': './app/components/buttons/logoutButton/logoutButton.js',
                      'saveButton': './app/components/buttons/saveButton/saveButton.js',
                      'cancelButton': './app/components/buttons/cancelButton/cancelButton.js',
                      'editButton': './app/components/buttons/editButton/editButton.js',
                      'deleteButton': './app/components/buttons/deleteButton/deleteButton.js',
                      'customButton': './app/components/buttons/customButton/customButton.js',
                       
                      'editLink': './app/components/links/editLink.js',
                      'deleteLink': './app/components/links/deleteLink.js',
                      'privacyLink': './app/components/links/privacyLink.js',
                      'forgotPasswordLink': './app/components/links/forgotPasswordLink.js',
                      'viewLink': './app/components/links/viewLink.js',

                      'appCheckbox': './app/components/checkboxes/appCheckbox.js',

                      'appFlatList': './app/components/flatList/appFlatList.js',                
                      'bookingCardsFlatList': './app/components/flatList/bookingCardsFlatList.js',
                      
                      'screenOverflowMessage': './app/components/messages/screenOverflowMessage.js',
                      'screenOverflowErrorMessage': './app/components/messages/screenOverflowErrorMessage.js',
                      'dataNotFoundMessage': './app/components/messages/dataNotFoundMessage.js',

                      'dashBoardTabScreen': './app/components/tabs/dashBoardTabScreen.js',
                      'bookingsTabScreen': './app/components/tabs/bookingsTabScreen.js',
                      'settingsTabScreen': './app/components/tabs/settingsTabScreen.js',

                      'appText': './app/components/texts/appText.js',
                      'appTextSmall': './app/components/texts/appTextSmall.js',
                      'appTextBig': './app/components/texts/appTextBig.js',
                      'appTitleText': './app/components/texts/appTitleText.js',
                      'amountNumberText': './app/components/texts/amountNumberText.js',
                      'cardTitleText': './app/components/texts/cardTitleText.js',
                      'cartAmountText': './app/components/texts/cartAmountText.js',
                      'cardDescriptionText': './app/components/texts/cardDescriptionText.js',
                      'hyperLinkText': './app/components/texts/hyperLinkText.js',
                      'addressText': './app/components/texts/addressText.js',
                      'fieldErrorText': './app/components/texts/fieldErrorText.js',
                      'mandatoryText': './app/components/texts/mandatoryText.js',

                      'appPicker': './app/components/pickers/appPicker.js',
                      'servicePicker': './app/components/pickers/servicePicker.js',

                      'appActivityIndicator': './app/components/indicators/appActivityIndicator/appActivityIndicator.js',                      
                      
                      'inputField': './app/components/inputFields/inputField.js',
                      'numericField': './app/components/inputFields/numericField.js',
                      'amountField': './app/components/inputFields/amountField.js',
                      'textAreaField': './app/components/inputFields/textAreaField.js',
                      'textField': './app/components/inputFields/textField.js',
                      'emailField': './app/components/inputFields/emailField.js',
                      'mobileField': './app/components/inputFields/mobileField.js',
                      'minutesField': './app/components/inputFields/minutesField.js',

                      'userProfileForm': './app/components/forms/userProfileForm.js',
                      'userAddressForm': './app/components/forms/userAddressForm.js',                      
                      'genericOtpForm': './app/components/forms/genericOtpForm.js',

                      'flatListSeparatorView': './app/components/separators/flatListSeparatorView.js',
                       
                      'bookingCard': './app/components/cards/booking/bookingCard.js',
                      'settingsSectionCard': './app/components/cards/setting/settingsSectionCard.js',      
                      'addressSettingCard': './app/components/cards/setting/addressSettingCard.js',
                      'profileSettingCard': './app/components/cards/setting/profileSettingCard.js',
                      'ratingSettingCard': './app/components/cards/setting/ratingSettingCard.js',

                      'homeScreen': './app/screens/homeScreen.js',
                      'loginSignUpScreen': './app/screens/loginSignUpScreen.js',
                      'settingsScreen': './app/screens/settingsScreen.js',
                      'dashboardScreen': './app/screens/dashboardScreen.js',                      
                      'editUserProfileScreen': './app/screens/editUserProfileScreen.js',
                      'editUserAddressScreen': './app/screens/editUserAddressScreen.js',
                      'userAddressesScreen': './app/screens/userAddressesScreen.js',
                      'locationSelectionScreen': './app/screens/locationSelectionScreen.js',
                      'toDoScreen': './app/screens/toDoScreen.js',
                                            
                      'logoutService': './app/services/logoutService.js',
                      'getData': './app/services/ajax/getData.js',                        
                      'putData': './app/services/ajax/putData.js',
                      'postData': './app/services/ajax/postData.js',
                      'deleteData': './app/services/ajax/deleteData.js',
                      'executeAjaxCall': './app/services/ajax/executeAjaxCall.js',

                      'tabScreenConfig': './app/utils/tabs/tabScreenConfig.js',
                      'pickerUtil': './app/utils/picker/pickerUtil.js',
                      'settingsNavigatorConfig': './app/utils/navigation/settingsNavigatorConfig.js',
                                            
                      'profileUtil': './app/utils/profile/profileUtil.js',

                      'imagePickerUtil': './app/utils/image/imagePickerUtil.js',

                      'schedulePushNotification': './app/utils/notifications/schedulePushNotification.js',
                      'registerNotificationToken': './app/utils/notifications/registerNotificationToken.js',
                      'sendNotification': './app/utils/notifications/sendNotification.js',
                      
                      'addAddress': './app/utils/addresses/addAddress.js',
                      'getAddress': './app/utils/addresses/getAddress.js',
                      'updateAddress': './app/utils/addresses/updateAddress.js',
                      'deleteAddress': './app/utils/addresses/deleteAddress.js',
                      'addressesUtil': './app/utils/addresses/addressesUtil.js',
                      'editUserProfile': './app/utils/user/editUserProfile.js',
                      'loginUtil': './app/utils/user/loginUtil.js',
                      'setAppData': './app/utils/user/setAppData.js',
                      'getAppData': './app/utils/user/getAppData.js',
                      'getUserProfile': './app/utils/user/getUserProfile.js',

                      'getUserRating': './app/utils/userService/getUserRating.js',
                                            
                      'handleResponse': './app/utils/response/handleResponse.js',

                      'alertMessage': './app/utils/messages/alertMessage.js',
                      'showErrorMessage': './app/utils/messages/showErrorMessage.js',
                      'showProfileIncompleteMessage': './app/utils/messages/showProfileIncompleteMessage.js',

                      'constants': './app/utils/constants/constants.js',
                      
                    },
                  },
                ],
                "react-native-reanimated/plugin"
              ],
  };
};