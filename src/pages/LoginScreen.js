import React from 'react';
import { View } from 'react-native';
import { loginStyle } from '../assets/styles/index'
import FormLogin from '../components/FormLogin';

const LoginScreen = () => (
  <View style={loginStyle.container}>
    <FormLogin />
  </View>
);

export default LoginScreen;