// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Pages/HomeScreen';
import ListScreen from './Pages/ListScreen';
import CounterScreen from './Pages/CounterScreen';
import ColorGenerator from './Pages/ColorGenerator';
import TextScreen from './Pages/TextScreen';
import PageLayout from './Pages/PageLayout';
import SearchMoviesScreen from './Pages/SearchMoviesScreen';
import MovieDetailsScreen from './Pages/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorGenerator" component={ColorGenerator} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="PageLayout" component={PageLayout} />
        <Stack.Screen
          name="SearchMoviesScreen"
          component={SearchMoviesScreen}
        />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
