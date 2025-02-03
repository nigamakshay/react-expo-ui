import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { dashBoardTabScreen } from 'dashBoardTabScreen';
import { bookingsTabScreen } from 'bookingsTabScreen';
import { settingsNavigator } from 'settingsNavigator';
import { DashboardScreen } from "dashboardScreen";
import { SettingsScreen } from "settingsScreen";
import { ToDoScreen } from "toDoScreen";

const Tab = createBottomTabNavigator();

export const HomeStackNavigator = () => {

  return (    
    <Tab.Navigator {...settingsNavigator()}>
      <Tab.Screen {...dashBoardTabScreen()}>
        {props => <DashboardScreen {...props} />}
      </Tab.Screen>

      <Tab.Screen {...bookingsTabScreen()}>
        {props => <ToDoScreen {...props} />}
      </Tab.Screen>

      <Tab.Screen>
        {props => <SettingsScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );

};