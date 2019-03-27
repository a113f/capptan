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
          backgroundColor: "white", borderRadius: 5, 
          width: Dimensions.get('screen').width - 20, padding: 10,
          margin: 5,  
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Título: </Text>
        <Text>{ guideline.title }</Text>
        <Text style={{ fontWeight: 'bold' }}>Descrição: </Text>
        <Text>{ guideline.description }</Text>
      </View>
    );
  }
}

export default Guideline;