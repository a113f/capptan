import React from 'react';
import { FlatList, SafeAreaView, ScrollView } from 'react-native';
import Guideline from './Guideline';

const List = ({ guidelines }) => (
  <SafeAreaView style={{ }}>
    <ScrollView>
      <FlatList
        style={{ paddingTop: 10 }}
        data={guidelines}
        renderItem={({ item }) => <Guideline guideline={item} />}
      />
    </ScrollView>
  </SafeAreaView>
)

export default List;
