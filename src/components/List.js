import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import Guideline from './Guideline';

const List = ({ guidelines }) => (
  <SafeAreaView style={{ }}>
    <FlatList
      data={guidelines}
      renderItem={({ item }) => <Guideline guideline={item} />}
    />
  </SafeAreaView>
)

export default List;
