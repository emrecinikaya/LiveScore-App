import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './WinPredictionStyle';

const Prediction = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.text}>Away</Text>
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.home_text}>{data.comparison.total.home}</Text>
        <Text style={styles.away_text}>{data.comparison.total.away}</Text>
      </View>
      <Text style={styles.text}>Match Advice == {data.predictions.advice}</Text>
    </View>
  );
};

export default Prediction;
