import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './TopScorersStyle';

const TopScorers = ({data}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.player.photo}} />
      <Text style={styles.name}>{data.player.name}</Text>
      <Text style={styles.goals}>{data.statistics[0].goals.total}</Text>
    </View>
  );
};

export default TopScorers;
