import { 
  createStackNavigator
} from 'react-navigation';

import SignInScreen from '../pages/SignInScreen';
import LoginScreen from '../pages/LoginScreen';

const AuthStack = createStackNavigator({ 
  Login: LoginScreen,
  SignIn: SignInScreen 
}, {
  headerMode: 'none'
});

export default AuthStack;