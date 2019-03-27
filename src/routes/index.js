import { 
  createSwitchNavigator, createAppContainer
} from 'react-navigation';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AuthLoadingScreen from '../utils/auth';

const Routes = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default Routes;
