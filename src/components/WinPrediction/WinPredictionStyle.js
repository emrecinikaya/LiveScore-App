import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    flex: 1,
  },
  home_text: {
    color: 'gray',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    flex: 1,
  },
  away_text: {
    color: 'gray',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    flex: 1,
  },
});
