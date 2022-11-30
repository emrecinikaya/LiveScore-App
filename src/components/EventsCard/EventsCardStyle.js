import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  innerContainer: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
  },
  container: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  text: {
    color: 'black',
    paddingRight: 10,
    paddingLeft: 10,
  },
  image: {
    height: Dimensions.get('window').height / 40,
    width: Dimensions.get('window').width / 20,
    marginRight: 10,
    marginLeft: 10,
  },
});
