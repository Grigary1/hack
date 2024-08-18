// import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// // Define placeholder components for the tabs
// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Settings Screen</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Profile Screen</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'settings' : 'settings-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// Main.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomePage from '/home/grigary/hackathon/SignUpNumber/Home_Screen/HomePage.js';
import Chat from '/home/grigary/hackathon/SignUpNumber/ChatPage/Chat.js';
import Authorities from '/home/grigary/hackathon/SignUpNumber/ChatPage/Authorities.js';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomePage') {
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
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Authorities" component={Authorities} />
    </Tab.Navigator>
  );
}
