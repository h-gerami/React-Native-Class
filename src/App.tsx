// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './Pages/ListScreen';
import CounterScreen from './Pages/CounterScreen';
import ColorGenerator from './Pages/ColorGenerator';
import TextScreen from './Pages/TextScreen';
import PageLayout from './Pages/PageLayout';
import SearchMoviesScreen from './Pages/SearchMoviesScreen';
import MovieDetailsScreen from './Pages/MovieDetailsScreen';
import HomeContainer from './Pages/HomeContainer';
import LoginContainer from './Pages/Login/LoginContainer';
import SettingScreen from './Pages/Setting/SettingScreen';
import {Provider} from 'react-redux';
import NoteScreen from './Pages/Note/NoteScreen';
import {store} from './Redux/store';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeContainer} />
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
          <Stack.Screen name="LoginContainer" component={LoginContainer} />
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
          <Stack.Screen name="NoteScreen" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
