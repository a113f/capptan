import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Guideline from './Guideline';
import { WIDTH } from '../utils/constants'

import { guidelineStyle } from '../assets/styles';

import {AccordionList} from "accordion-collapse-react-native";
import { Button } from 'react-native-elements';

import api from '../utils/api';

_handleRenderHead = (item) => {
    return  <Guideline guideline={item} />
}

_handleRenderBody = (item) => {
    return (
        <View style={
          [guidelineStyle.container, {
            backgroundColor: "#f3f3f3", marginTop: -10, width: WIDTH - 40,
             alignSelf: 'center'
          }]
        }>
          <Text style={{ marginBottom: 10 }}>{item.detail}</Text>

          <Button 
            title={ item.inactive ? "Ativar" : "Desativar" }
            onPress={() => this._handleChange(item)}
            type="outline"
          />
        </View>
    );
}

_handleChange = async (item) => {
  let url = `/disable/${item.id}`
  
  if (item.inactive)
    url = `/activate/${item.id}`
  
  await api.patch(url, {});
}

const List = ({ guidelines }) => (
  <SafeAreaView style={{ }}>
    <ScrollView>
      <AccordionList
        list={guidelines}
        header={_handleRenderHead}
        body={_handleRenderBody}
      />
    </ScrollView>
  </SafeAreaView>
)

export default List;
