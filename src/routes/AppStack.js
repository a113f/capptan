import { 
  createBottomTabNavigator, createStackNavigator 
} from 'react-navigation';

import NAVIGATION_HEADER from '../utils/constants';

import React from 'react';
import { Icon } from 'react-native-elements';

import ActivedScreen from "../pages/ActivedScreen";
import InativedScreen from "../pages/InativedScreen";
import ProfileScreen from "../pages/ProfileScreen";

import { PRIMARY, SECONDARY } from '../assets/styles/colors';

const isFocus = (focused) => {
  if (focused) {
    return PRIMARY
  } else { 
    return SECONDARY
  }  
}

const Actived = createStackNavigator({
  Actived: ActivedScreen
}, NAVIGATION_HEADER );

const Inatived = createStackNavigator({
  Inatived: InativedScreen,
}, NAVIGATION_HEADER );

const Profile = createStackNavigator({
  Profile: ProfileScreen,
}, NAVIGATION_HEADER );

const AppStack = createBottomTabNavigator({
  Actived: {
    screen: Actived,
    navigationOptions: () => ({
      tabBarLabel: 'Ativas', 
      tabBarIcon: ({ focused }) => {          
        return  <Icon type="material" name="list" size={30} 
                  color={isFocus(focused)} 
                />
      }
    })

  },
  Inatived: {
    screen: Inatived,
    navigationOptions: () => ({
      tabBarLabel: 'Inativas', 
      tabBarIcon: ({ focused }) => {          
        return  <Icon type="material" name="list" size={30} 
                  color={isFocus(focused)} 
                />
      }
    })
  },
  Profile:  {
    screen: Profile,
    navigationOptions: () => ({
      tabBarLabel: 'Perfil', 
      tabBarIcon: ({ focused }) => {
        return  <Icon type="material" name="person" size={30} 
                  color={isFocus(focused)} 
                />
      }
    })
  },
});

export default AppStack;