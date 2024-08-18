

// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import Authorities from '/home/grigary/hackathon/SignUpNumber/ChatPage/Authorities.js';
// // import Chat from '/home/grigary/hackathon/SignUpNumber/ChatPage/Chat.js';
// // // import SettingsScreen from './screens/SettingsScreen';
// // import { Ionicons } from '@expo/vector-icons';

// // const Tab = createBottomTabNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         screenOptions={({ route }) => ({
// //           tabBarIcon: ({ focused, color, size }) => {
// //             let iconName;

// //             if (route.name === 'Home') {
// //               iconName = focused ? 'home' : 'home-outline';
// //             } else if (route.name === 'Profile') {
// //               iconName = focused ? 'person' : 'person-outline';
// //             } else if (route.name === 'Settings') {
// //               iconName = focused ? 'settings' : 'settings-outline';
// //             }

// //             return <Ionicons name={iconName} size={size} color={color} />;
// //           },
// //           tabBarActiveTintColor: 'tomato',
// //           tabBarInactiveTintColor: 'gray',
// //         })}
// //       ><View><Text>jftfku</Text></View>
// //         <Tab.Screen name="Home" component={Authorities} />
// //         <Tab.Screen name="Chat" component={Chat} />
// //         {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Authorities from '/home/grigary/hackathon/SignUpNumber/ChatPage/Authorities.js';
// import Chat from '/home/grigary/hackathon/SignUpNumber/ChatPage/Chat.js';
// import { Ionicons } from '@expo/vector-icons';

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
//             } else if (route.name === 'Chat') {
//               iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'settings' : 'settings-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={Authorities} />
//         <Tab.Screen name="Chat" component={Chat} />
//         {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
import { View, Text } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  )
}

export default HomePage