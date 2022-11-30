import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 20,
    width: Dimensions.get('window').width / 10,
    marginRight: 10,
    marginLeft: 10,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 5,
    marginBottom: 10,
    paddingBottom: 20,
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  container: {
    padding: 5,
  },
  team_info_left: {
    overflow: 'hidden',
    flexDirection: 'row',
    flex: 8,
  },
  team_info_right: {
    flexDirection: 'row',
    flex: 8,
  },
  scoreboard: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    flex: 2,
  },
  elapsed: {
    flex: 1,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});
