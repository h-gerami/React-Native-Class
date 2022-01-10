// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Pages/HomeScreen';
import ListScreen from './Pages/ListScreen';
import CounterScreen from './Pages/CounterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
