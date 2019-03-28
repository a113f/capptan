import React, { Component } from 'react';
import { 
  Button, Dimensions, KeyboardAvoidingView, TextInput, View 
} from 'react-native';

import { withNavigation } from 'react-navigation';

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
      <View style={{ width: Dimensions.get('screen').width - 10 }}>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Título"
            autoCapitalize
            keyboardType='default'
            value={this.state.title}
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
            onChangeText={title => this.setState({ title })}
          />
          <TextInput
            placeholder="Descrição"
            autoCapitalize
            value={this.state.description}
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
            onChangeText={description => this.setState({ description })}
          />
        </KeyboardAvoidingView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            title="Adicionar"
            onPress={this._handleAddGuideline}
          />
          <Button
            title="Cancelar"
            onPress={() => navigation.navigate('Actived')}
          />
        </View>
        
      </View>
    );
  }
}

export default withNavigation(FormGuideline);