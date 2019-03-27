import React from 'react';
import { View } from 'react-native';
import { systemStyle } from '../assets/styles/index'
import FormLogin from '../components/FormLogin';

const LoginScreen = () => (
  <View style={systemStyle.container}>
    <FormLogin />
  </View>
);

export default LoginScreen;