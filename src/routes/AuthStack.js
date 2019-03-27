import { 
  createStackNavigator
} from 'react-navigation';

import SignInScreen from '../pages/SignInScreen';
import LoginScreen from '../pages/LoginScreen';

const AuthStack = createStackNavigator({ 
  Login: LoginScreen,
  SignIn: SignInScreen 
});

export default AuthStack;