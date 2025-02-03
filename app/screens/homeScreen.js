import React, { useState } from "react";
import { CenterContainer } from 'containerStyles';
import { PressableButton } from 'pressableButton';
import i18n from 'i18n-js';
import { AppTextBig } from 'appTextBig';
import { AppTextSmall } from 'appTextSmall';


export const HomeScreen = ({ navigation }) => {

  const [userType, setUserType] = useState("1");

  return (<>
      <CenterContainer>
        <AppTextBig 
          style = {{ 
            marginBottom: 50
          }}
          text={i18n.t("appHeader")}
        >          
        </AppTextBig>
        
        <AppTextSmall text={i18n.t("getStarted")}>          
        </AppTextSmall>

        <PressableButton
          fontWeight={900}
          onPress = {() => navigation.navigate('LoginSignUpScreen', {mode: 1})}
          text = { i18n.t("login") }
          width={'80%'}
        />

        <PressableButton
          fontWeight={900}
          onPress = {() => navigation.navigate('LoginSignUpScreen', {mode: 2})}
          text = { i18n.t("createAccount") }
          width={'80%'}
        />         
      </CenterContainer>
    </>
  );
}
