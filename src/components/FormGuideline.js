import React, { Component } from 'react';
import { 
  KeyboardAvoidingView, TextInput, View 
} from 'react-native';
import { Button } from 'react-native-elements';

import { withNavigation } from 'react-navigation';
import { systemStyle } from '../assets/styles';

class FormGuideline extends Component {

  state = {
    title: '',
    description: '',
  }

  _handleAddGuideline = async () => {
    this.props.navigation.navigate('Inatived')
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
          <TextInput
            placeholder="Descrição"
            autoCapitalize
            value={this.state.description}
            style={systemStyle.formInput}
            onChangeText={description => this.setState({ description })}
          />
        </KeyboardAvoidingView>

        <View style={systemStyle.containerButtons}>
          <Button
            title="Adicionar"
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            onPress={this._handleAddGuideline}
          />
          <Button
            title="Cancelar"
            buttonStyle={systemStyle.buttonContainer}
            titleStyle={systemStyle.titleStyle}
            onPress={() => navigation.navigate('Actived')}
          />
        </View>
        
      </View>
    );
  }
}

export default withNavigation(FormGuideline);