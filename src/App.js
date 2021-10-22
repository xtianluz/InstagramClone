/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';
import PostScreen from './screens/PostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FoundationIcon from 'react-native-vector-icons/Foundation';
import Evilicon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => { 
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
          title: 'Instagram',
          headerTitle: 'Instagram',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons name={'ios-camera-outline'} size={23} />
          ),
          headerRight: () => (
            <Ionicons name={'md-paper-plane-outline'} size={23} />
          )
      }}
      />
    </HomeStack.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
  
              if (route.name === 'Home') {
                return <FoundationIcon name={'home'} size={size} color={color} />
              } else if (route.name === 'Discovery') {
                return <Evilicon name={'search'} size={size} color={color} />
              } else if (route.name === 'Post') {
                return <Evilicon name={'plus'} size={size} color={color} />
              } else if (route.name === 'Notification') {
                return <Ionicons name={'notifications-outline'} size={20} color={color} />
              } else if (route.name === 'Profile') {
                return <Ionicons name={'ios-people-outline'} size={20} color={color} />
              }

            },
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Discovery" component={DiscoveryScreen} />
          <Tab.Screen name="Post" component={PostScreen} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;