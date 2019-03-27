import React, { Component } from 'react';
import { View } from 'react-native';

import { systemStyle } from '../assets/styles'
import List from '../components/List';

const guidelines = [
  {
    id: 4,
    title: "Título 4",
    description: "Descrição 4 Completamente finalizada, quase completa.",
    author: "Author 4",
    actived: true
  },
  {
    id: 5,
    title: "Título 5",
    description: "Descrição 5 Completamente finalizada, quase completa.",
    author: "Author 5",
    actived: true
  },
  {
    id: 6,
    title: "Título 6",
    description: "Descrição 6 Completamente finalizada, quase completa.",
    author: "Author 6",
    actived: true
  }
]

class InativedScreen extends Component {
  render() {
    return (
      <View style={systemStyle.container}>
        <List guidelines={guidelines} />
      </View>  
    )
  }
}

export default InativedScreen;