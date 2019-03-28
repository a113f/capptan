import React, { Component } from 'react';
import { 
  AsyncStorage, TextInput, View 
} from 'react-native';
import { Button } from 'react-native-elements';

import Logo from './Logo';

import { withNavigation } from 'react-navigation';
import { systemStyle } from '../assets/styles';
import { PRIMARY } from '../assets/styles/colors';

import api from '../utils/api';

class FormLogin extends Component {

  state = {
    email: 'allef@gomes.com',
    password: '12341234'
  }

  _login = async () => {
    let { navigation } = this.props
    let { email, password } = this.state;

    const response = await api.post('/auth', {
      auth: { email, password }
    });

    if (response.ok) {
      let { token } = response.data
      
      try {
        await AsyncStorage.setItem('@Capptan:Token', token);
        navigation.navigate('Actived')
      } catch (error) {
        
      }
    } else {
      
    }
  }

  render() {
    return (
      <View style={systemStyle.containerForm}>
        
        <Logo />

        <View>
          <TextInput
            placeholder="Email"
            selectionColor={PRIMARY}
            autoCapitalize="none"
            keyboardType='email-address'
            autoFocus
            value={this.state.email}
            style={systemStyle.formInput}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            placeholder="Senha"
            selectionColor={PRIMARY}
            secureTextEntry 
            value={this.state.password}
            style={systemStyle.formInput}
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <View style={systemStyle.containerButtons}>
          <Button
            title="Registrar"
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            onPress={() => this.props.navigation.navigate('SignIn')}
          />
          <Button
            title="Logar"
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            onPress={this._login}
          />
        </View>
        
      </View>  
    );
  }
}

export default withNavigation(FormLogin);