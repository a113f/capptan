import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'

const ErrorMessage = ({ message, color }) => (
  <View style={{ paddingBottom: 10, marginTop: -5 }}>
    <Text style={{ color }}>{ message }</Text>
  </View>
)

export default ErrorMessage;