import React, { Component } from 'react';
import {
  Alert, AsyncStorage, TextInput, View
} from 'react-native';
import { Button } from 'react-native-elements';

import Logo from './Logo';

import { withNavigation } from 'react-navigation';
import { systemStyle } from '../assets/styles';
import { PRIMARY } from '../assets/styles/colors';

import api from '../utils/api';
import ErrorMessage from './ErrorMessage';

class FormSignup extends Component {

  state = {
    name: 'Allef Gomes',
    email: 'allef@gomes.com',
    password: '12341234',
    errorEmail: false,
    errorName: false,
    errorPassword: false,
    loading: false
  }

  _login = async () => {
    this.setState({ loading: true })
    let { navigation } = this.props
    let { name, email, password } = this.state;

    if (email == '' || name == '' || password == '') {
      if (email == '')
        this.setState(() => ({ loading: false, errorEmail: true }))
      if (name == '')
        this.setState(() => ({ loading: false, errorName: true }))
      if (password == '')
        this.setState(() => ({ loading: false, errorPassword: true }))

      return
    } else {
      this.setState(() => ({ errorEmail: false, errorPassword: false, errorName: false }))
    }

    const response = await api.post('/users', {
      user: { name, email, password }
    });

    if (response.ok) {
      let { token } = response.data

      await AsyncStorage.setItem('@Capptan:Token', token);
      this.setState({ loading: false })
      navigation.navigate('Actived')
    } else {
      Alert.alert(
        'Credenciais incorretas!',
        'O email digitado já tem conta no sistema.',
        [
          {text: 'OK', onPress: () => {}},
        ],
      );
      this.setState({ loading: false })
    }
  }

  render() {
    return (
      <View style={systemStyle.containerForm}>

        <Logo />

        <View>
          <TextInput
            placeholder="Nome"
            selectionColor={PRIMARY}
            autoCapitalize="none"
            keyboardType='default'
            autoFocus
            editable={!this.state.loading}
            value={this.state.name}
            style={systemStyle.formInput}
            onChangeText={name => this.setState({ name })}
          />
          {
            this.state.errorName ?
            <ErrorMessage message="Nome é obrigatório" color="red" /> :
            <View />
          }

          <TextInput
            placeholder="Email"
            selectionColor={PRIMARY}
            autoCapitalize="none"
            keyboardType='email-address'
            autoFocus
            editable={!this.state.loading}
            value={this.state.email}
            style={systemStyle.formInput}
            onChangeText={email => this.setState({ email })}
          />
          {
            this.state.errorEmail ?
            <ErrorMessage message="Email é obrigatório" color="red" /> :
            <View />
          }

          <TextInput
            placeholder="Senha"
            selectionColor={PRIMARY}
            secureTextEntry
            editable={!this.state.loading}
            value={this.state.password}
            style={systemStyle.formInput}
            onChangeText={password => this.setState({ password })}
          />
          {
            this.state.errorPassword ?
            <ErrorMessage message="Senha é obrigatório" color="red" /> :
            <View />
          }

        </View>

        <View style={systemStyle.containerButtons}>
          <Button
            title={ this.state.loading ? "Aguarde..." : "Logar"}
            disabled={this.state.loading}
            disabledStyle={systemStyle.buttonContainer}
            disabledTitleStyle={systemStyle.titleStyle}
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            onPress={() => this.props.navigation.navigate('SignIn')}
          />
          <Button
            title={ this.state.loading ? "Cadastrando..." : "Cadastrar"}
            loading={this.state.loading}
            disabled={this.state.loading}
            disabledStyle={systemStyle.buttonContainer}
            disabledTitleStyle={systemStyle.titleStyle}
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            onPress={this._login}
          />
        </View>

      </View>
    );
  }
}

export default withNavigation(FormSignup);
