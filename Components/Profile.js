
import React, { Component } from 'react';

import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Home from './Home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Few from './Few';

const Tab = createMaterialTopTabNavigator();

export default function Profile () {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Few" component={Few} />
    </Tab.Navigator>
  );
}

