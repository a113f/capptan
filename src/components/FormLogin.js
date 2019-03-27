import React, { Component } from 'react';
import { AsyncStorage, Button, Dimensions, TextInput, View } from 'react-native';
import Logo from './Logo';
import { withNavigation } from 'react-navigation';

class FormLogin extends Component {

  state = {
    email: '',
    password: ''
  }

  _login = async () => {
    let { navigation } = this.props
    await AsyncStorage.setItem('userToken', 'VRAU');
    navigation.navigate('Actived')
  }

  render() {
    return (
      <View style={{ width: Dimensions.get('screen').width - 10 }}>
        
        <Logo />

        <View>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType='email-address'
            value={this.state.email}
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry 
            value={this.state.password}
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            title="Registrar"
            onPress={this._login}
          />
          <Button
            title="Logar"
            onPress={this._login}
          />
        </View>
        
      </View>  
    );
  }
}

export default withNavigation(FormLogin);