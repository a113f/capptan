import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { systemStyle } from '../assets/styles'

class ProfileScreen extends Component {
  render() {
    return (
      <View style={systemStyle.container}>
        <Text>Nome: Fulano</Text>
        <Text>Email: fulano@allef.com</Text>
      </View>
    );
  }
}

export default ProfileScreen;