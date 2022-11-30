import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import MatchCard from '../components/MatchCard/MatchCard';

function First(props) {
  const [matchList, setMatchList] = useState([]);

  function fetchData() {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
      params: {date: '2022-05-21', league: '203', season: '2021'},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'ce6bac21c0msh1cf35c640efaa7bp1d9d40jsn0a53353d6030',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMatchList(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function goTo(item) {
    props.navigation.navigate('SecondScreen', {item});
  }

  const renderMatch = ({item}) => (
    <MatchCard data={item} onSelect={() => goTo(item)} />
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Canlı Skorlar</Text>
      <FlatList
        data={matchList}
        renderItem={renderMatch}
        keyExtractor={(item, index) => item.fixture.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
    letterSpacing: 1,
    textAlign: 'center',
    backgroundColor: '#006400',
    fontStyle: 'italic',
  },
});

export default First;
