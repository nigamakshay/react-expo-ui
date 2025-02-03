import React, { useState, createContext } from 'react';

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [resetUserData, resetUserDataMethod] = useState(null);
  const [bearerToken, setBearerToken] = useState(null);
  const [serviceList, setServiceList] = useState(null);
  const [userServiceList, setUserServiceList] = useState([]);
  const [serviceMap, setServiceMap] = useState({});
  const [userUserServicesMap, setUserUserServicesMap] = useState({});
  const [userServiceFetched, setUserServiceFetched] = useState(false);
  const [slots, setSlots] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [serviceCategories, setServiceCategories] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [bookingsStateMap, setBookingsStateMap] = useState(null);
  const [addresses, setAddresses] = useState(null);
  const [isProfileComplete, setProfileComplete] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [userKit, setUserKit] = useState(null);

  const userSettings = {
    user,
    setUser,
    userData,
    setUserData,
    bearerToken,
    setBearerToken,    
    serviceList,
    setServiceList,
    userServiceList,
    setUserServiceList,    
    serviceMap,
    setServiceMap,
    userUserServicesMap,
    setUserUserServicesMap,
    userServiceFetched,
    setUserServiceFetched,
    slots,
    setSlots,
    availability,
    setAvailability,
    serviceCategories,
    setServiceCategories,
    userProfile,
    setUserProfile,
    bookingsStateMap,
    setBookingsStateMap,
    addresses,
    setAddresses,
    isProfileComplete,
    setProfileComplete,
    currentService,
    setCurrentService,
    userKit,
    setUserKit, 
    resetUserData,
    resetUserDataMethod   
  }

  return (
    <AuthenticatedUserContext.Provider value={userSettings}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};