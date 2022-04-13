import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import New from './New';
const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator >
        <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}