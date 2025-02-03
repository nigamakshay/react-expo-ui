export const logout = (options) => (
  options && options.userContext && options.userContext.resetUserData()
);


//ToDo: code for firebase authentication
// // import firebase from 'firebaseModule';
// import auth from '@react-native-firebase/auth';
// export const logout = () => (
//   auth().signOut().then(
//     )
// );