import React from 'react';
import { View } from 'react-native';
import { systemStyle } from '../assets/styles/index'
import FormSignup from '../components/FormSignup';

const SignupScreen = () => (
  <View style={systemStyle.container}>
    <FormSignup />
  </View>
);

export default SignupScreen;
