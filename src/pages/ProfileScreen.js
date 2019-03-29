import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Button, Icon } from 'react-native-elements'

import { systemStyle } from '../assets/styles';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "PERFIL",
    headerRight: (
      <Button
          onPress={() => {
            AsyncStorage.clear();
            navigation.navigate('AuthLoading');
          }}
          type="clear"
          icon={
            <Icon
              type="font-awesome"
              name="sign-out"
              size={25}
              color="white"
            />
          }
        />
    ),
    headerLeft: null,
  })

  state = {
    user: {}
  }

  componentDidMount = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('@Capptan:user'));
    this.setState({ user });
    console.log(this.state)
  }

  render() {
    let { user } = this.state;
    return (
      <View style={systemStyle.container}>
        <Text>Nome: { user.name }</Text>
        <Text>Email: { user.email }</Text>
      </View>
    );
  }
}

export default ProfileScreen;
