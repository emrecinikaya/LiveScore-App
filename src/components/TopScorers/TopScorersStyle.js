import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  image: {
    height: Dimensions.get('window').height / 20,
    width: Dimensions.get('window').width / 10,
    marginRight: 10,
    marginLeft: 10,
    flex: 1,
  },
  name: {
    color: 'black',
    flex: 10,
    marginTop: 10,
  },
  goals: {
    color: 'black',
    flex: 1,
    marginTop: 10,
  },
});
