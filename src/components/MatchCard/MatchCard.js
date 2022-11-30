import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './MatchCard.style';

const MatchCard = ({data, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect} style={styles.inner_container}>
        <Text style={styles.elapsed}>{data.fixture.status.elapsed}</Text>
        <View style={styles.team_info_left}>
          <Image style={styles.image} source={{uri: data.teams.home.logo}} />
          <Text style={styles.text}>{data.teams.home.name}</Text>
        </View>
        <View style={styles.scoreboard}>
          <Text style={styles.text}>{data.goals.home}</Text>
          <Text style={styles.text}> - </Text>
          <Text style={styles.text}>{data.goals.away}</Text>
        </View>
        <View style={styles.team_info_right}>
          <Text style={styles.text}>{data.teams.away.name}</Text>
          <Image style={styles.image} source={{uri: data.teams.away.logo}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MatchCard;
