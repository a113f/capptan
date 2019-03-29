import React, { Component } from 'react';
import {
  KeyboardAvoidingView, TextInput, View
} from 'react-native';
import { Button } from 'react-native-elements';

import { withNavigation } from 'react-navigation';
import { systemStyle } from '../assets/styles';

import api from '../utils/api';
import ErrorMessage from './ErrorMessage';
class FormGuideline extends Component {

  state = {
    title: '',
    description: '',
    detail: '',
    errorTitle: false,
    errorDescription: false,
    errorDetail: false,
    loading: false
  }

  _handleAddGuideline = async () => {
    this.setState({ loading: true })
    let { navigation } = this.props
    let { title, description, detail } = this.state;

    if (title == '' || description == '' || detail == '') {
      if (title == '') {
        this.setState(() => ({ loading: false, errorTitle: true }))
      } else {
        this.setState(() => ({ errorTitle: false }))
      }

      if (description == '') {
        this.setState(() => ({ loading: false, errorDescription: true }))
      } else {
        this.setState(() => ({ errorDescription: false }))
      }

      if (detail == '') {
        this.setState(() => ({ loading: false, errorDetail: true }))
      } else {
        this.setState(() => ({ errorDetail: false }))
      }

      return
    } else {
      this.setState(() => ({
        errorTitle: false, errorDescription: false, errorDetail: false
      }))
    }

    const response = await api.post('/guidelines', {
      guideline: { title, description, detail }
    });

    if (response.ok) {
      this.setState({ loading: false })
      navigation.navigate('Actived')
    } else {
      Alert.alert(
        'Não foi possível cadastrar a pauta!',
        'Ocorreu um erro no cadastro da pauta!',
        [
          {text: 'OK', onPress: () => {}},
        ],
      );
      this.setState({ loading: false })
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={systemStyle.containerForm}>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Título"
            autoCapitalize
            keyboardType='default'
            value={this.state.title}
            style={systemStyle.formInput}
            onChangeText={title => this.setState({ title })}
          />
          {
            this.state.errorTitle ?
            <ErrorMessage message="Título é obrigatório" color="red" /> :
            <View />
          }
          <TextInput
            placeholder="Descrição"
            autoCapitalize
            value={this.state.description}
            style={systemStyle.formInput}
            onChangeText={description => this.setState({ description })}
          />
          {
            this.state.errorDescription ?
            <ErrorMessage message="Descrição é obrigatório" color="red" /> :
            <View />
          }
          <TextInput
            placeholder="Detalhes"
            autoCapitalize
            keyboardType='default'
            value={this.state.detail}
            style={systemStyle.formInput}
            onChangeText={detail => this.setState({ detail })}
          />
          {
            this.state.errorDetail ?
            <ErrorMessage message="Detalhe é obrigatório" color="red" /> :
            <View />
          }
        </KeyboardAvoidingView>

        <View style={systemStyle.containerButtons}>
          <Button
            title={this.state.loading ? "Aguarde..." : "Voltar"}
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            disabled={this.state.loading}
            disabledStyle={systemStyle.buttonContainer}
            disabledTitleStyle={systemStyle.titleStyle}
            onPress={() => navigation.navigate('Actived')}
          />
          <Button
            title={this.state.loading ? "Cadastrando..." : "Cadastrar"}
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            loading={this.state.loading}
            disabled={this.state.loading}
            disabledStyle={systemStyle.buttonContainer}
            disabledTitleStyle={systemStyle.titleStyle}
            onPress={this._handleAddGuideline}
          />
        </View>

      </View>
    );
  }
}

export default withNavigation(FormGuideline);
