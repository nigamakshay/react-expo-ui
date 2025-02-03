import i18n from 'i18n-js';
import { useState, useEffect } from 'react';
import { FullContainer, HorizontalView } from 'containerStyles';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { PressableButton } from 'pressableButton';
import { GOOGLE_API_KEY } from '@env';
import { showErrorMessage } from 'showErrorMessage'; 
import { bigButtonStyle } from 'componentStyles';
import { Text } from 'react-native';
import { AppTextBig } from 'appTextBig';
import { AppActivityIndicator } from 'appActivityIndicator';

export const LocationSelectionScreen = ({navigation, route}) => {
  const options = route.params || {};
  
  const [location, setLocation] = useState(null); 
  const [inProgress, setInProgress] = useState(false);
  const [mapRef, setMapRef] = useState(null);
  const [deviceAddress, setDeviceAddress] = useState(null);
  const [googleAddress, setGoogleAddress] = useState(null);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        showErrorMessage({errorKey: 'locationAccessDenied'});
        navigation.navigate('UserAddressesScreen');
        return;
      }
     
      let location = await Location.getCurrentPositionAsync({accuracy: 4});
      setLocation(location);   

      let address = await Location.reverseGeocodeAsync({
        accuracy: 5,
        latitude: location.coords.latitude, 
        longitude: location.coords.longitude}
      );
      setDeviceAddress(address);
      getGoogleAddress(location.coords);
    })();    
  }, []);

  const handleMapReady = () => {
    mapRef.animateToRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }, 1000);

    // mapRef.animateCamera({
    //     center: {
    //       latitude: location.coords.latitude,
    //       longitude: location.coords.longitude,
    //     },
    //     zoom: 15,
    //     pitch: 0,
    //     heading: 0,
    //     duration: 5000,
    //   });    
  }

  const handleMarkerDragEnd = (coordinate, position) => {
    getGoogleAddress(coordinate.nativeEvent.coordinate);    
  }

  const getGoogleAddress = (coordinate) => {
    setInProgress(true);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude},${coordinate.longitude}&location_type=GEOMETRIC_CENTER&key=${GOOGLE_API_KEY}`;    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if(data && data.results && data.results[0]) {
          const fullAddress = data.results[0].formatted_address;        
          setGoogleAddress(fullAddress);
          setSelectedCoordinate(coordinate);
          setInProgress(false);
        }
      });    
  }

  return (
    <FullContainer>
      {location && location.coords ? 
        <>
          <MapView 
            ref={ref => setMapRef(ref)}
            provider={PROVIDER_GOOGLE}
            loadingEnabled={true}
            showsUserLocation={true}
            style={{width: '100%', height: '85%'}}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421                  
            }}
            onMapReady={handleMapReady}
            onMarkerDragEnd={
              (coordinate, position) => handleMarkerDragEnd(coordinate, position)
            }
          >
            <Marker
              flat={true}
              draggable={true}
              isPreselected={true}
              coordinate={location.coords}
            />
          </MapView>        
          <PressableButton 
            width={'70%'}
            {...bigButtonStyle}
            text={i18n.t('confirmLocation')}
            disabled={inProgress}
            onPress={() => {
              options.onConfirmLocation({
                deviceAddress: deviceAddress,
                googleAddress: googleAddress,
                selectedCoordinate: selectedCoordinate
              })
            }}
          />
        </> : 
        <>
          <AppTextBig
            text={i18n.t("loadingGoogleMap")}
            style={{marginTop: '50%', fontWeight: '500'}}>
          </AppTextBig>
          <HorizontalView style={{marginTop: 50}}>
            <AppActivityIndicator animating={true}/>
          </HorizontalView>  
        </>
      }
    </FullContainer>
  );
}