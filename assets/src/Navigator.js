import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuizSelectionScreen from './screens/QuizSelectionScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import AllScoresScreen from './screens/AllScoresScreen/index.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QuizSelection" component={QuizSelectionScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="AllScores" component={AllScoresScreen} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
