import React, { Component } from 'react';
import { View } from 'react-native';

import { systemStyle } from '../assets/styles'
import List from '../components/List';

import api from '../utils/api';

class InativedScreen extends Component {
  static navigationOptions = () => ({
    title: "INATIVAS",
    headerRight: null, 
    headerLeft: null,
  })

  state = {
    guidelines: []
  }

  componentDidMount = async () => {
    const response = await api.get('/inactive');
    let guidelines = response.data
    this.setState({ guidelines })
  }

  render() {
    return (
      <View style={systemStyle.container}>
        <List guidelines={this.state.guidelines} />
      </View>  
    )
  }
}

export default InativedScreen;