import { 
  createStackNavigator
} from 'react-navigation';

import SignupScreen from '../pages/SignupScreen';
import LoginScreen from '../pages/LoginScreen';

const AuthStack = createStackNavigator({ 
  Login: LoginScreen,
  Signup: SignupScreen 
}, {
  headerMode: 'none'
});

export default AuthStack;