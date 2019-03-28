import { 
  createStackNavigator
} from 'react-navigation';

import NewGuidelineScreen from '../pages/NewGuidline';
import NAVIGATION_HEADER from '../utils/constants';

const ModalStack = createStackNavigator({ 
  New: NewGuidelineScreen, 
},{
  mode: 'modal',
  ...NAVIGATION_HEADER
});

export default ModalStack;