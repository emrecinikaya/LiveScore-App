import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import Prediction from '../../components/WinPrediction/WinPrediction';
import Stats from '../../components/ScorePrediction/ScorePrediction';

function PredictionScreen({route}) {
  const [prediction, setPrediction] = useState([]);
  const [stats, setStats] = useState([]);
  const {item} = route.params;
  var match_id = item.fixture.id;
  var league_id = item.league.id;
  var home = item.teams.home.id;
  var away = item.teams.away.id;

  useEffect(() => {
    function fetchData() {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/predictions',
        params: {fixture: match_id},
        headers: {
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          'X-RapidAPI-Key':
            'ce6bac21c0msh1cf35c640efaa7bp1d9d40jsn0a53353d6030',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setPrediction(response.data.response);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    function fetchStats() {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
        params: {season: '2021', league: league_id},
        headers: {
          'X-RapidAPI-Key':
            'ce6bac21c0msh1cf35c640efaa7bp1d9d40jsn0a53353d6030',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setStats(response.data.response);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    fetchData();
    fetchStats();
  }, [match_id, league_id]);

  const renderPrediction = ({item}) => <Prediction data={item} />;

  const renderStats = ({item}) => <Stats data={item} home={home} away={away} />;

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.team_info}>
          <Image style={styles.image} source={{uri: item.teams.home.logo}} />
          <Text style={styles.score}>{item.goals.home}</Text>
        </View>
        <Text style={styles.score}>-</Text>
        <View style={styles.team_info}>
          <Text style={styles.score}>{item.goals.away}</Text>
          <Image style={styles.image} source={{uri: item.teams.away.logo}} />
        </View>
      </View>
      <View style={styles.name_container}>
        <Text style={styles.text}>{item.teams.home.name}</Text>
        <Text style={styles.text}>{item.teams.away.name}</Text>
      </View>
      <View>
        <FlatList data={prediction} renderItem={renderPrediction} />
      </View>
      <View>
        <FlatList data={stats} renderItem={renderStats} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
  image: {
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width / 5,
    margin: 10,
  },
  team_info: {
    overflow: 'hidden',
    flexDirection: 'row',
  },
  score: {
    fontSize: 50,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  name_container: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  flag_image: {
    height: Dimensions.get('window').height / 30,
    width: Dimensions.get('window').width / 15,
    marginRight: 10,
    marginLeft: 10,
  },
  detail_text: {
    color: 'black',
    padding: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  detail_container: {
    padding: 10,
  },
});

export default PredictionScreen;
