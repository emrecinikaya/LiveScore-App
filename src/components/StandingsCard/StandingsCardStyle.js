import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  inner_container: {flexDirection: 'row', backgroundColor: 'gray', padding: 10},
  text: {
    color: 'black',
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center',
    flex: 4,
  },
  image: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width / 10,
    flex: 1,
  },
  even_standings: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  odd_standings: {
    flexDirection: 'row',
    backgroundColor: '#BEBEBE',
    marginBottom: 5,
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 5,
  },
  rank_flex: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  flex: {
    color: 'black',
    flex: 1,
    textAlign: 'right',
  },
  team_flex: {
    color: 'black',
    flex: 6,
  },
});
