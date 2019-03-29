import { StyleSheet } from 'react-native';
import { WIDTH } from '../../utils/constants';

const guideline = StyleSheet.create({
  container: {
    zIndex: 9999,
    backgroundColor: "white", borderRadius: 5,
    width: WIDTH - 20,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  title: { fontWeight: 'bold' }
});

export default guideline;
