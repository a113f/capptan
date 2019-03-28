import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { systemStyle } from '../assets/styles';
import List from '../components/List';

import api from '../utils/api';

class ActivedScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "ATIVADAS",
    headerRight: (
      <Button
          onPress={() => {
            navigation.navigate('New');
          }}
          type="clear"
          icon={
            <Icon
              type="material"
              name="add"
              size={25}
              color="white"
            />
          }
        />
    ),
    headerLeft: null,
  })

  state = {
    guidelines: []
  }

  componentDidMount = async () => {
    const response = await api.get('/active');
    let guidelines = response.data
    this.setState({ guidelines })
  }

  render() {
    return (
      <View style={systemStyle.container}>
        <List guidelines={this.state.guidelines} />
      </View>  
    );
  }
}

export default ActivedScreen;