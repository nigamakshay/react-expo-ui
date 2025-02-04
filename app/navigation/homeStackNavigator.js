import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { dashBoardTabScreen } from 'dashBoardTabScreen';
import { servicesTabScreen } from 'servicesTabScreen';
import { settingsTabScreen } from 'settingsTabScreen';
import { settingsNavigator } from 'settingsNavigator';
import { DashboardScreen } from "dashboardScreen";
import { SettingsScreen } from "settingsScreen";
import { ServiceScreen } from "../screens/serviceScreen";

const Tab = createBottomTabNavigator();

export const HomeStackNavigator = () => {

  return (    
    <Tab.Navigator {...settingsNavigator()}>
      <Tab.Screen {...dashBoardTabScreen()}>
        {props => <DashboardScreen {...props} />}
      </Tab.Screen>

      <Tab.Screen {...servicesTabScreen()}>
        {props => <ServiceScreen {...props} />}
      </Tab.Screen>

      <Tab.Screen {...settingsTabScreen()}>
        {props => <SettingsScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );

};