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
            AsyncStorage.removeItem('@Capptan:Token');
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