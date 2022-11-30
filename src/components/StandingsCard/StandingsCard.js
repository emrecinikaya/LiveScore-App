import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './StandingsCardStyle';

const StandingsCard = ({data}) => {
  var standings = data.league.standings[0];
  var i = 0;

  const renderStandings = ({item}) => (
    /*<View style={styles.even_standings}>
      <Text style={styles.rank_flex}>{standings[i].rank}</Text>
      <Text style={styles.team_flex}>{standings[i].team.name}</Text>
      <Text style={styles.flex}>{standings[i].all.played}</Text>
      <Text style={styles.flex}>{standings[i].all.win}</Text>
      <Text style={styles.flex}>{standings[i].all.draw}</Text>
      <Text style={styles.flex}>{standings[i].all.lose}</Text>
      <Text style={styles.flex}>{standings[i].all.goals.for}</Text>
      <Text style={styles.flex}>{standings[i].all.goals.against}</Text>
      <Text style={styles.flex}>{standings[i].goalsDiff}</Text>
      <Text style={styles.flex}>{standings[i++].points}</Text>
    </View>*/
    <View style={styles.even_standings}>
      <Text style={styles.rank_flex}>{item.rank}</Text>
      <Text style={styles.team_flex}>{item.team.name}</Text>
      <Text style={styles.flex}>{item.all.played}</Text>
      <Text style={styles.flex}>{item.all.win}</Text>
      <Text style={styles.flex}>{item.all.draw}</Text>
      <Text style={styles.flex}>{item.all.lose}</Text>
      <Text style={styles.flex}>{item.all.goals.for}</Text>
      <Text style={styles.flex}>{item.all.goals.against}</Text>
      <Text style={styles.flex}>{item.goalsDiff}</Text>
      <Text style={styles.flex}>{item.points}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: data.league.logo}} />
        <Text style={styles.text}>{data.league.name}</Text>
      </View>
      <View style={styles.bar}>
        <Text style={styles.rank_flex}>R</Text>
        <Text style={styles.team_flex}>Team</Text>
        <Text style={styles.flex}>P</Text>
        <Text style={styles.flex}>W</Text>
        <Text style={styles.flex}>D</Text>
        <Text style={styles.flex}>L</Text>
        <Text style={styles.flex}>F</Text>
        <Text style={styles.flex}>A</Text>
        <Text style={styles.flex}>D</Text>
        <Text style={styles.flex}>P</Text>
      </View>
      <FlatList data={standings} renderItem={renderStandings} />
    </View>
  );
};

export default StandingsCard;
