import { createBottomTabNavigator } from 'react-navigation'

import ActivedScreen from "../pages/ActivedScreen";
import InativedScreen from "../pages/InativedScreen";
import ProfileScreen from "../pages/ProfileScreen";

const AppStack = createBottomTabNavigator({
  Actived: ActivedScreen,
  Inatived: InativedScreen,
  Profile: ProfileScreen
});

export default AppStack;