import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  inner_container: {
    flexDirection: 'row',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    paddingTop: 30,
    paddingBottom: 30,
  },
  text: {color: 'black', fontSize: 13, textAlign: 'center'},
  details: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  lineUps: {
    flex: 1,
    marginLeft: 50,
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width / 5,
    marginRight: 10,
    marginLeft: 35,
  },
  title: {
    fontSize: 25,
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
  },
  team_name: {color: 'green', fontSize: 25, textAlign: 'center'},
});
