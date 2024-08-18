import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, Alert, SafeAreaView, KeyboardAvoidingView, Platform,ScrollView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust the import path as necessary

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Please fill in both fields.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in user:', user);
        Alert.alert('Login Successful', `Welcome back, ${email}!`);
        navigation.navigate('Main'); // Navigate to the Home screen after successful login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Login Error', errorMessage);
      });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1}}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="bg-violet-200 h-[520] mt-[250] ml-6 mr-6 rounded-3xl flex items-center">
            <Text className="text-3xl pt-8 font-semibold">Welcome</Text>
            
            {/* Username Input with Icon */}
            <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="user" size={20} color="gray" />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                className="flex-1 pl-2 h-11"
              />
            </View>
            <View>
              </View>
            {/* Email Input with Icon */}
            <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="lock" size={20} color="gray" />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="flex-1 pl-2 h-11"
              />
            </View>
            
            {/* Password Input with Icon */}
            {/* <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="lock" size={20} color="gray" />
              <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                className="flex-1 pl-2 h-11"
              />
            </View> */}
            
            {/* Confirm Password Input with Icon */}
            {/* <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="lock" size={20} color="gray" />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                className="flex-1 pl-2 h-11"
              />
            </View> */}

            {/* Custom Checkbox */}
            {/* <View className="flex-row items-center mt-4">
              <TouchableOpacity onPress={() => setSelection(!isSelected)} className="mr-2">
                <View className="w-6 h-6 border-2 flex items-center justify-center">
                </View>
              </TouchableOpacity>
              <Text>I agree with Privacy and Policy</Text>
            </View> */}

            {/* Sign Up Button */}
            <View className="pt-5">
              <TouchableOpacity className="bg-green-300 rounded-3xl h-9 flex justify-center w-24 items-center" onPress={handleLogin}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>

            {/* Login Link */}
            <View className="mt-4">
              <Text>
                Don't have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className="text-blue-500" onPress={()=>navigation.navigate('Signup')}>SignUp</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
// <View>
// <Text>Login</Text>
          
// <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
// 
  
// />
// </View>



//   <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
// </TouchableOpacity>
// </View>