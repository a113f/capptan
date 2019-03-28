import { Dimensions, StyleSheet } from 'react-native';
import { PRIMARY, SECONDARY } from './colors'
import { WIDTH } from '../../utils/constants';

const system = StyleSheet.create({
  buttonContainer: {
    backgroundColor: PRIMARY,
    width: ( WIDTH / 2 ) - 30
  },
  titleStyle: {
    color: SECONDARY
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c8c8c',
  },
  containerButtons: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  containerForm: { 
    padding: 10,
    width: WIDTH - 20 
  },
  formInput: {
    height: 40, 
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#ccc", 
    borderWidth: 1, 
    marginVertical: 10,
    color: PRIMARY
  },
  logo: { 
    width: 200, 
    height: 100, 
    alignSelf: 'center' 
  }
});

export default system;
