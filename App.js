
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignUp from '/home/grigary/hackathon/SignUpNumber/Login_Setup/SignUp.js';
// import Login from '/home/grigary/hackathon/SignUpNumber/Login_Setup/Login.js';
// import Main from '/home/grigary/hackathon/SignUpNumber/Login_Setup/Main.js';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignUp} />
//         <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
//         <Stack.Screen name="Main" options={{ headerShown: false }} component={Main} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



import { View, Text } from 'react-native'
import React from 'react'
import Chat_y from '/home/grigary/hackathon/SignUpNumber/ChatPage/Chat_y.js'
const App = () => {
  return (
    <View>
      <Chat_y/>
    </View>
  )
}

export default App