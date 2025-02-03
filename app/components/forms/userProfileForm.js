import { TextField } from 'textField';
import { MobileField } from 'mobileField';
import { EmailField } from 'emailField';
import { SaveButton } from 'saveButton';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import i18n from 'i18n-js';
import { StackActions } from '@react-navigation/native'
import { VerticalRightView, FullContainer, VerticalScrollView, HorizontalView } from 'containerStyles';
import { editUserProfile } from 'editUserProfile';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import RadioButtonRN from 'radio-buttons-react-native';
import { themeColor } from 'colorStyles';
import { alertMessage } from 'alertMessage';
import { isUserProfileComplete } from 'loginUtil';
import { MandatoryIcon } from 'mandatoryIcon';
import { ImagePicker } from 'imagePicker';
import { FieldErrorText } from 'fieldErrorText';
import { MandatoryText } from 'mandatoryText';
import { AppActivityIndicator } from 'appActivityIndicator';
import { titleStyle } from 'componentStyles';

export const UserProfileForm = (options) => {
  
  const [name, setName] = React.useState();
  const [mobile, setMobile] = React.useState();
  const [email, setEmail] = React.useState();
  const [gender, setGender] = React.useState(2);
  const [valueChanged, setValueChanged] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const genderSelection = [
    {
      label: i18n.t('female'),
      value: 1
    }//,
    //{
    //  label: 'male',
    // value: 2
    //}
  ];

  const navigation = useNavigation();
  const userContext = useContext(AuthenticatedUserContext);
  
  const successCallback = (result) => {
    userContext.setUserData(result.user);
    alertMessage({
      ok: true, 
      message: i18n.t('profileUpdated'),
      okPressed: () => {
        if (options.navigateToNextScreen && isUserProfileComplete({
          userData: result.user,
          addresses: userContext.addresses
        })) {
          navigation.dispatch(StackActions.popToTop());
          navigation.navigate(options.navigateToNextScreen);
        } else {
          navigation.navigate('SettingsScreen', {
            nextScreen: options.navigateToNextScreen
          });
        }
      }
    });
    
    //navigation.dispatch(
   //   StackActions.popToTop()
    //);    
  }

  useEffect(() => {
    if(userContext && userContext.userData) {
      setName(userContext.userData.name);
      setMobile(userContext.userData.mobile);
      // setEmail(userContext.userData.email);
      setGender(userContext.userData.gender);
      setImage(userContext.userData.profile_pic_uri);
      setLoading(false);
    }
  }, []);

  function isFormFilled() {
    if(image == null) return false;
    if(name == null || name.length == 0) return false;
    // if(email == null && mobile == null) return false;

    // return name.length != 0 &&
      // ((email && email.length != 0) || (mobile && mobile.length != 0));

    return mobile && mobile.length != 0;
  }

  return (
    <VerticalScrollView>
      {
        loading ? 
          <AppActivityIndicator animating={true}/>
        :
        <>
        <HorizontalView style={{
        width: '100%', 
        height: 100,
        marginBottom: 30
      }}>
        <View style={{width: '40%'}}>
          <RadioButtonRN
            box={false}
            textColor={themeColor}
            initial={gender ? 1 : 0}
            activeColor={themeColor}
            style={{width: 300, marginBottom: 20}}
            data={genderSelection}
            selectedBtn={(e) => {
              setValueChanged(true);
              setGender(e && e.value || 1);
            }}
          />
        </View>
        <VerticalRightView style={{width: '60%', height: 100, padding: 10}}>
          <ImagePicker 
            image={image || userContext.userData && 
              userContext.userData.profile_pic_uri}
            viewStyle={{width: 100, height: 100}}
            imageStyle={{width: 100, height: 100}}
            setImageContent={(result) => {setImage(result)}}
          />
          { 
            !image && 
            <MandatoryText text={'profilePicture'}/>
          }
        </VerticalRightView>
      </HorizontalView>
      
      <HorizontalView style={{marginTop: 20}}>
        <MandatoryText text={'name'} style={titleStyle}/>
      </HorizontalView>
      <TextField 
        onChangeText={(name) => {
          setValueChanged(true);
          setName(name);
        }} 
        value={name}
      />
      { 
        name && name.length < 4 && 
        <FieldErrorText text='nameMinLength'/>
      }

      <HorizontalView style={{marginTop: 20}}>
        <MandatoryText text={'mobile'} style={titleStyle}/>
      </HorizontalView>     
      <MobileField
        onChangeText={(mobile) => {
          setValueChanged(true);
          setMobile(mobile);
        }} 
        value={mobile}
      />      

      {/*<Text style={{marginTop: 20, fontWeight: '500'}}>
        {i18n.t("email")}
      </Text>
      <EmailField 
        onChangeText={(email) => {
          setValueChanged(true);
          setEmail(email);
        }} 
        value={email}
      />*/}

      {
        !image && <View style={{marginTop: 20}}> 
          <FieldErrorText text='profilePicRequired' style={{marginTop: 10}}/>
        </View>
      }


      {/*
        (!image || ((!email && !mobile))) && <HorizontalView style={{marginTop: 10}}/>
      
      {
        !mobile && <MandatoryText text='emailRequired'/>
      }
      */}
      <FullContainer style={{marginTop: 20}}>
        <SaveButton
          payload={{
            id: userContext.userData && userContext.userData.id,
            data: {
              'name': name,
              'mobile': mobile,
              // 'email': email,
              'gender': gender,
              'profile_pic': {      
                uri: image && image.uri,
                type: 'image/jpeg',
                name: 'profile-pic.jpg',
                data: image && image.base64,}
              }
          }}     
          disabled={!isFormFilled()}
          onPress={options.actionMethod || editUserProfile}
          setColorOn={isFormFilled()} 
          successCallback={options.successCallback || successCallback}        
        />
      </FullContainer>
        </>
      }
    </VerticalScrollView>
  );  
}
