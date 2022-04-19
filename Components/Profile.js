
import React, { Component } from 'react';

import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Home from './Home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Few from './Few';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Tab = createMaterialTopTabNavigator();

export default function Profile () {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home}  options={{
                    tabBarIcon: () => (
                    <Ionicons name='home' size={22} fontWeight="bold" color='#000000' style={{position:'absolute',top:5,right:7,opacity:0.6,fontWeight:"bold"}}/>)
                }}/>
      <Tab.Screen name="Explore" component={Login} options={{
                    tabBarIcon: () => (
                    <MaterialIcons name='explore' size={22} fontWeight="bold" color='#000000' style={{position:'absolute',top:5,right:7,opacity:0.6,fontWeight:"bold"}}/>)
                }}/>
      <Tab.Screen name="Location" component={Few} options={{
                    tabBarIcon: () => (
                    <Ionicons name='location' size={22} fontWeight="bold" color='#000000' style={{position:'absolute',top:5,right:7,opacity:0.6,fontWeight:"bold"}}/>)
                }}/>
    </Tab.Navigator>
  );
}

