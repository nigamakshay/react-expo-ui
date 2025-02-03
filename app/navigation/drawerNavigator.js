import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsScreen } from "settingsScreen";
import { ToDoScreen } from "toDoScreen";
import { DashboardScreen } from "dashboardScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  return (
    <Drawer.Navigator initialRouteName="DashboardScreen">
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="ToDoScreen" component={ToDoScreen} />
    </Drawer.Navigator>
  );
}