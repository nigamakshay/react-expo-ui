import React, { useState } from 'react';
import { PressableButton } from 'pressableButton';
import {
  View,
  Text,
  Modal,
  Dimensions
} from 'react-native';
import { InputField } from 'inputField';
import { HorizontalCenterView } from 'containerStyles';
import i18n from 'i18n-js';
import { cardButtonStyle, fieldErrorStyle } from 'componentStyles';
import { CloseIcon } from 'closeIcon';
import { AppText } from 'appText';
import { cardBackgroundColor, modalDisabledColor, borderColor, themeColor, themeLightColor, containerBackgroundColor } from 'colorStyles';

export const GenericOtpForm = (options) => {

  const [otp, setOTP] = useState('');
  const [invalidOtp, setInvalidOtp] = useState(false);
  const [modalVisible, setModalVisible] = useState(options.showOtpForm);

  const windowWidth = Dimensions.get('window').width;
  const modalWidth = windowWidth * 0.5;

  function onSave(params) {
    if(options.expectedOtp != otp) {
      setInvalidOtp(true);
      return;
    }

    options.onPress(params);
  }

  return (
    <View style={{
      flex: 1,
      width: modalWidth,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: cardBackgroundColor
      }}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => options.closeModal ? options.closeModal() : options.setModalVisible(false)}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <CloseIcon          
            style={{ marginBottom:  10}}
            onPress={() => {
              options.setSaveInProgress && options.setSaveInProgress(false);
              options.closeModal ? options.closeModal() : options.setShowOtpForm(false)
            }}
          />
          <View style={{ backgroundColor: themeColor, padding: 20, borderRadius: 5 }}>
            <AppText text={i18n.t('getOtpFromCustomer')} style={{color: containerBackgroundColor}}></AppText>
            <InputField
              style={{                
                width: modalWidth,
                height: 30,
                color: containerBackgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
                marginBottom: 10 }}
              onChangeText={(text) => {setInvalidOtp(false); setOTP(text)}}
              value={otp}
              autoFocus
              maxLength={4}            
              keyboardType="numeric"
              multiline={false}
            />
            {invalidOtp && <Text style={fieldErrorStyle}>{i18n.t('invalidOtp')}</Text>}

            <HorizontalCenterView style={{backgroundColor: themeColor}}>
              <PressableButton
                text={i18n.t('verifyOtp')}
                bgColor={otp.length > 0 ? themeLightColor : modalDisabledColor}
                width='100px'
                {...cardButtonStyle}
                fontColor={otp.length > 0 ? themeColor : containerBackgroundColor}
                disabled={otp.length == 0}
                setColorOn={otp.length > 0}
                onPress={() => {onSave(options.requestParams)}}
              />
            </HorizontalCenterView>
          </View>
        </View>
      </Modal>      
    </View>
  );
};