import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store/index';
import { Provider } from 'react-redux';

import HomeScreen from './components/Home';
import GameScreen from './components/Game';
import FinishScreen from './components/Finish';

const Stack = createStackNavigator();


function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Finish" component={FinishScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  )
}

export default App

