import React, { Component } from 'react';
import { View } from 'react-native';

import { systemStyle } from '../assets/styles'
import List from '../components/List';

const guidelines = [
  {
    id: 1,
    title: "Título 1",
    description: "Descrição 1 Completamente finalizada, quase completa.",
    author: "Author 1",
    actived: true
  },
  {
    id: 2,
    title: "Título 2",
    description: "Descrição 2 Completamente finalizada, quase completa.",
    author: "Author 2",
    actived: true
  },
  {
    id: 3,
    title: "Título 3",
    description: "Descrição 3 Completamente finalizada, quase completa.",
    author: "Author 3",
    actived: true
  }
]

class ActivedScreen extends Component {

  static navigationOptions = () => ({
    title: "ATIVADAS",
    headerRight: null, 
    headerLeft: null,
  })

  render() {
    return (
      <View style={systemStyle.container}>
        <List guidelines={guidelines} />
      </View>  
    );
  }
}

export default ActivedScreen;