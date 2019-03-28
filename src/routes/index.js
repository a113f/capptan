import { 
  createSwitchNavigator, createAppContainer
} from 'react-navigation';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AuthLoadingScreen from '../utils/auth';
import ModalStack from './ModalStack';

const Routes = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    Modal: ModalStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default Routes;
