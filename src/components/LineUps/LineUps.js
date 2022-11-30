import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './LineUpsStyle';

const LineUps = ({data}) => {
  var players = data.startXI;
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.details}>
          <Text style={styles.team_name}>{data.team.name}</Text>
          <Image style={styles.image} source={{uri: data.team.logo}} />
          <Text style={styles.text}> Coach : {data.coach.name}</Text>
          <Text style={styles.text}>Formation : {data.formation}</Text>
        </View>
        <View style={styles.lineUps}>
          <Text style={styles.title}>Lineup</Text>
          <Text style={styles.text}>{players[0].player.name}</Text>
          <Text style={styles.text}>{players[1].player.name}</Text>
          <Text style={styles.text}>{players[2].player.name}</Text>
          <Text style={styles.text}>{players[3].player.name}</Text>
          <Text style={styles.text}>{players[4].player.name}</Text>
          <Text style={styles.text}>{players[5].player.name}</Text>
          <Text style={styles.text}>{players[6].player.name}</Text>
          <Text style={styles.text}>{players[7].player.name}</Text>
          <Text style={styles.text}>{players[8].player.name}</Text>
          <Text style={styles.text}>{players[9].player.name}</Text>
          <Text style={styles.text}>{players[10].player.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default LineUps;
