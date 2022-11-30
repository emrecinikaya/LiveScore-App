import React, {useState} from 'react';
import {Text, View, Image, MaterialCommunityIcons} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailsScreen from './DetailsTab/EventsScreen';
import LineupsScreen from './DetailsTab/LineupsScreen';
import StandingsScreen from './DetailsTab/StandingsScreen';
import ScorersScreen from './DetailsTab/ScorersScreen';
import PredictionScreen from './DetailsTab/PredictionScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App({route}) {
  const {item} = route.params;

  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{item: item}}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Icon name="newspaper-variant-outline" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Lineups"
        component={LineupsScreen}
        initialParams={{item: item}}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return <Icon name="soccer-field" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Standings"
        component={StandingsScreen}
        initialParams={{item: item}}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return <Icon name="reorder-horizontal" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Scorers"
        component={ScorersScreen}
        initialParams={{item: item}}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return <Icon name="soccer" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Prediction"
        component={PredictionScreen}
        initialParams={{item: item}}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return <Icon name="progress-question" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
