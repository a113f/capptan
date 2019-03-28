import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { guidelineStyle } from '../assets/styles';

class Guideline extends Component {
  
  constructor(props){ 
    super(props);
  }

  render() {
    const { guideline } = this.props;
    return (
      <View 
        key={guideline.id} 
        style={guidelineStyle.container}
      >
        <Text style={guidelineStyle.title}>Título: </Text>
        <Text>{ guideline.title }</Text>
        <Text style={guidelineStyle.title}>Descrição: </Text>
        <Text>{ guideline.description }</Text>
      </View>
    );
  }
}

export default Guideline;