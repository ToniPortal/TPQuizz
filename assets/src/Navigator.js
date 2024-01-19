import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuizSelectionScreen from './screens/QuizSelectionScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import AllScoresScreen from './screens/AllScoresScreen/index.js';
import AuthScreen from './screens/AuthScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assurez-vous d'installer cette bibliothèque d'icônes

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function StackAppNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="QuizSelection" component={QuizSelectionScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Auth">
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="StackSelection" component={StackAppNavigator} options={{
        headerShown: false,
        tabBarLabel: "QuizSelection",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="help-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="AllScores" component={AllScoresScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="receipt-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Auth" component={AuthScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="receipt-outline" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default BottomTab;