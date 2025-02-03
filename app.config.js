// import 'dotenv/config';

export default {
  "expo": {
    "name": "React Expo UI",
    "slug": "react-expo-ui",    
    "owner": "akshaydeepnigam",    
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [        
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ],
      [
        "expo-notifications",
        {
          "icon": "./assets/icon.png"
        },
      ],
      [
        "expo-localization"
      ],
      [        
        "expo-build-properties",
        {
          "android": {
            "compileSdkVersion": 34,
            "targetSdkVersion": 34,
            "buildToolsVersion": "34.0.0"
          },
          "ios": {
            "useFrameworks": "static"
          },

        }
      ]    
    ], 
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#332511"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "googleServicesFile": "./config/GoogleService-Info.plist"
    },
    "scheme": "com.react.expo",
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "AIzaSyCN0pZM26_IFnthKpGkJCdKk6gBUf6CRF8"
        },
      },
      "googleServicesFile": "./config/google-services.json",
      "package": "com.react.expo",
      "versionCode": 1,      
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "permissions": ["android.permission.CALL_PHONE"]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "notification": {
      "icon": "./assets/icon.png",
      "color": "#ffffff",
      "iosDisplayInForeground": true,
      
    },
    "extra": {
      "apiKey": 'AIzaSyDk9TqVPgM9cxd0wV0MpvnM_OH9v61yP6E',
      "authDomain": 'test-firebase-3ed2a.firebaseapp.com',
      "projectId": 'test-firebase-3ed2a',
      "storageBucket": 'test-firebase-3ed2a.firebasestorage.app',
      "messagingSenderId": '532411083995',
      "appId": '1:532411083995:android:1d1e89cab6170fd309b0fe',
      "eas": {
        "projectId": "bdd31f8d-7318-4350-9bf8-cfff111909bb"
      }

    }

  }
};