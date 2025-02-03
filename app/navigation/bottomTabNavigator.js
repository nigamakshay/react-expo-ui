import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStack } from "homeStack";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {props => <HomeStack {...props} />}
      </Tab.Screen>      
    </Tab.Navigator>
  );
};