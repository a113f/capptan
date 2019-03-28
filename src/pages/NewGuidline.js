import React, { Component } from 'react';
import { View } from 'react-native';
import { systemStyle } from '../assets/styles/index'
import FormGuideline from '../components/FormGuideline';

class NewGuidelineScreen extends Component {

  static navigationOptions = () => ({
    title: "ADICIONAR PAUTA",
  })

  render() {
    return (
      <View style={systemStyle.container}>
        <FormGuideline />
      </View>
    )
  }
}

export default NewGuidelineScreen;