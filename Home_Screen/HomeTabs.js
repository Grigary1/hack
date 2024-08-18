// HomeTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '/home/grigary/hackathon/SignUpNumber/ChatPage/Chat.js';
import Authorities from '/home/grigary/hackathon/SignUpNumber/ChatPage/Authorities.js'; // Replace with your actual Authorities screen
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Authorities') {
            iconName = focused ? 'alert-circle' : 'alert-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Authorities" component={Authorities} />
    </Tab.Navigator>
  );
}
