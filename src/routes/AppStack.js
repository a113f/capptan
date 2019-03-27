import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import ActivedScreen from "../pages/ActivedScreen";
import InativedScreen from "../pages/InativedScreen";
import ProfileScreen from "../pages/ProfileScreen";

const baseNavigationOptions = {
  headerTintColor: '#8c8c8c',
  headerStyle: {
    backgroundColor: 'white',
  },
};

const options = {
  defaultNavigationOptions: baseNavigationOptions,
  headerLayoutPreset: 'center'
}

const Actived = createStackNavigator({
  Actived: ActivedScreen
}, options );

const Inatived = createStackNavigator({
  Inatived: InativedScreen,
}, options );

const Profile = createStackNavigator({
  Profile: ProfileScreen,
}, options );

const AppStack = createBottomTabNavigator({
  Actived,
  Inatived,
  Profile
});

export default AppStack;