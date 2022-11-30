import React, {useState, useEffect} from 'react';
import {View, Image, Text, Button} from 'react-native';
import styles from './ScorePredictionStyle';

const Stats = ({data, home, away}) => {
  var stats = data.league.standings[0];
  const [homeGoal, setHomeGoal] = useState(0);
  const [awayGoal, setAwayGoal] = useState(0);
  var total = 0;
  var i = 0;
  var home_off = 0;
  var home_def = 0;
  var away_off = 0;
  var away_def = 0;

  function statsFinder() {
    for (i = 0; i < 20; i++) {
      total += stats[i].all.goals.for;
      if (stats[i].team.id == home) {
        home_off = stats[i].all.goals.for / stats[i].all.played;
        home_def = stats[i].all.goals.against / stats[i].all.played;
      } else if (stats[i].team.id == away) {
        away_off = stats[i].all.goals.for / stats[i].all.played;
        away_def = stats[i].all.goals.against / stats[i].all.played;
      }
    }
    total = total / 760;
    home_off = home_off / total;
    away_off = away_off / total;
    home_def = home_def / total;
    away_def = away_def / total;
    setHomeGoal(parseFloat(total * home_off * away_def).toFixed(2));
    setAwayGoal(parseFloat(total * away_off * home_def).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={statsFinder} title="Skor Hesapla" />
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.text}>{homeGoal}</Text>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>{awayGoal}</Text>
      </View>
    </View>
  );
};

export default Stats;
