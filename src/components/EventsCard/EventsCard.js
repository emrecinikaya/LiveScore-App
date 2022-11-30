import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './EventsCardStyle';

const EventsCard = ({data}) => {
  var deneme;
  function eventType() {}
  function UserGreeting(data) {
    if (data.type === 'Card') {
      deneme = <Text style={styles.text}>{data.type}</Text>;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}> {data.time.elapsed}.</Text>
        <Text style={styles.text}>{data.type}</Text>
        <Image style={styles.image} source={{uri: data.team.logo}} />
        <Text style={styles.text}>{data.player.name}</Text>
      </View>
    </View>
  );
};

export default EventsCard;
