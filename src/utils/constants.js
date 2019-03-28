import { PRIMARY, SECONDARY } from '../assets/styles/colors';
import { Dimensions } from 'react-native';

const navigation_options = {
  headerTintColor: PRIMARY,
  headerStyle: {
    backgroundColor: SECONDARY,
  },
}

const NAVIGATION_HEADER = {  
  defaultNavigationOptions: navigation_options,
  headerLayoutPreset: 'center' 
}
const WIDTH = Dimensions.get('screen').width
const URL_BASE = "https://api-capptain.herokuapp.com/"

export { URL_BASE, WIDTH };
export default NAVIGATION_HEADER;