import React, { useState, useContext, useEffect } from 'react';
import i18n from 'i18n-js';
import { View } from 'react-native';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';
import { ScreenOverflowErrorMessage } from 'screenOverflowErrorMessage';
import { LOGIN_URL } from '@env';
import { setAppData } from 'setAppData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { AppActivityIndicator } from 'appActivityIndicator';
import { HorizontalCenterView, HorizontalRightView } from 'containerStyles';
import { showErrorMessage } from 'showErrorMessage';
import { useNavigation } from '@react-navigation/native';
import { MobileField } from 'mobileField';
import { AppText } from 'appText';
import { themeColor } from 'colorStyles';
import { PressableButton } from 'pressableButton';
import { TextField } from 'textField';
import { PrivacyLink } from "../components/links/privacyLink";

export const LoginSignUpScreen = (options) => {
  const userContext = useContext(AuthenticatedUserContext);

  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [phoneSignInStatus, setPhoneSignInStatus] = useState(null);  
  const [otp, setOtp] = useState(null);
  const [screenErrorMessage, setScreenErrorMessage] = React.useState();
  const [loading, setLoading] = useState(false);
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [otpInstruction, setOtpInstruction] = useState('verifyOtp');

  useEffect(() => {
    //Do operations before rendering screen, example - hit API call to fetch data
    setTimeout(function () {
    }, 1000)
  }, []);  

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      setLoading(true);
      setOtpInstruction('waitingForOtp');
      setPhoneSignInStatus(await auth().signInWithPhoneNumber(phoneNumber));
      setLoading(false);
      setOtpInstruction('enterOtp');
    } catch(error) {
      console.log("\nError in phone authentication: " + error);
      if(error.code == 'auth/invalid-phone-number') {
        showErrorMessage({errorKey: 'invalidPhoneNumber'});
      }
    }
  }

  async function getData(token) {
    try {
      userContext.setBearerToken(null);
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_type: 1,
          mobile: phoneNumber,
          token: token               
        })
      }).catch(error => {
        setOtp(null);
        userContext.setBearerToken(null);
        showErrorMessage({ errorKey: i18n.t("loginFailed") });
      });

      console.log("\nWaiting for user data...");
      const result = await response.json();
      
      if (!result.success) {        
        userContext.setBearerToken(null);
        await AsyncStorage.removeItem('appUserBearerToken');
        setLoginInProgress(false);
        setOtp(null);
        showErrorMessage({ text: result.message });
      } else {         
        userContext.setUserData(result.user);
        userContext.setBearerToken(result.token); 

        await AsyncStorage.setItem('appUserBearerToken', JSON.stringify(result.token));
        setAppData(userContext, result);
        setLoginInProgress(false);
      }                          
    } catch (err) {
      setOtp(null);
      userContext.setBearerToken(null);
      await AsyncStorage.removeItem('appUserBearerToken');
      showErrorMessage({ text: err.message });
    }
  }

  return ( <>
    <View style={{ padding: 20, marginTop: 50 }}>
      {
        !loginInProgress && <>
        <AppText style={{ marginTop: 20 }} text={i18n.t('enterMobileNumber')}></AppText>

        <MobileField
          onChangeText={(mobile) => {
            setPhoneNumber(mobile);
          }}
          value={phoneNumber}
          containerStyle={{marginBottom: 10}}
          inputBoxStyle={{}}
        />

        <PressableButton
          text={i18n.t('getOtp')}      
          color={themeColor}
          style={{ marginTop: 10}}
          fontWeight={900}
          width={'100%'}
          disabled={!phoneNumber || phoneNumber.length<13 || phoneNumber == '+91xxxxxxxxxx'}
          setColorOn={!(!phoneNumber || phoneNumber.length<13 || phoneNumber == '+91xxxxxxxxxx')}
          onPress={ async () => {
            try {
              await AsyncStorage.removeItem('appUserBearerToken');
              signInWithPhoneNumber(phoneNumber);
              setOtpInstruction('verificationotpSentToPhone');
            } catch (err) {   alert(err)
              setOtp(null);
              userContext.setBearerToken(null);
              await AsyncStorage.removeItem('appUserBearerToken');
              showErrorMessage({text: err.message,
                nextScreen: 'HomeScreen',
                navigator: useNavigation()
              });
            }
          }}
        />  
        </>
      }

      {
        loading && !loginInProgress && <>
          <HorizontalCenterView>
            <AppText style={{marginTop:30}} text={i18n.t(otpInstruction)}></AppText>
            <View style={{marginTop:30, marginLeft:20}}>
              <AppActivityIndicator animating={loading} size="large"/>
            </View>        
          </HorizontalCenterView>
        </>
      }         

      {
        loginInProgress && <>
          <HorizontalCenterView>
            <AppText style={{marginTop:30}} text={i18n.t('loading')}></AppText>
            <View style={{marginTop:30, marginLeft:20}}>
              <AppActivityIndicator animating={loginInProgress} size="large"/>
            </View>
          </HorizontalCenterView>
        </>
      }

      {
        phoneSignInStatus && !loginInProgress && <>
          <TextField
            style={{marginVertical: 10, marginTop: 30}}
            editable={true}
            placeholder={i18n.t('enterOtp')}
            value={otp}
            onChangeText={setOtp}
          />
      
          <PressableButton
            text={i18n.t('confirmOtp')}
            width={'100%'}
            fontWeight={900}
            disabled={!phoneSignInStatus || !otp}
            setColorOn={!(!phoneSignInStatus || !otp)}
            onPress={async () => {
              try {
                setLoginInProgress(true);
                phoneSignInStatus && await phoneSignInStatus.confirm(otp);
                console.log("\nLogin done!");

                const unsubscribe = auth().onAuthStateChanged(function(user) {
                  if (user) {
                    let token = user.getIdToken().then((token) => {     
                      console.log("\nFirebase token: " + JSON.stringify(token));
                      !!token && token != "null" && getData(token);   
                    });
                  }
                });

                unsubscribe();    
              } catch (err) {
                setLoading(false);
                setOtp(null);
                userContext.setBearerToken(null);

                await AsyncStorage.removeItem('appUserBearerToken');

                if(err.code == 'auth/unkown') {
                  showErrorMessage();
                } else {
                  showErrorMessage({ text: err.message });
                }            
              }          
            }}
          />
        </>
      }

      
      { screenErrorMessage ? <ScreenOverflowErrorMessage 
        //Can show error on full screen by setting setScreenErrorMessage(true)
        callback={() => {
          setOtp(null);
          userContext.setBearerToken(null);
          setScreenErrorMessage(null);
        }} /> : null 
      }

      { !loginInProgress && <HorizontalRightView style={{width: '100%', margin: 10, paddingRight: 10}}>
          <PrivacyLink/>
        </HorizontalRightView>
      }
    </View>
    </>
  );
}