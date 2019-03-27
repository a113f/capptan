import React, { Component } from 'react';
import { Dimensions, View, Text } from 'react-native';

class Guideline extends Component {
  
  constructor(props){ 
    super(props);
  }

  render() {
    const { guideline } = this.props;
    return (
      <View 
        key={guideline.id} 
        style={{ 
          backgroundColor: "white", marginTop: 15, borderRadius: 5, 
          width: Dimensions.get('screen').width - 20, padding: 10
        }}
      >
        <Text>Título: { guideline.title }</Text>
        <Text>Descrição: { guideline.description }</Text>
      </View>
    );
  }
}

export default Guideline;