import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importing the icon library
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Import the auth instance from your firebase configuration

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    // Privacy Policy Validation
    if (!isSelected) {
      Alert.alert('Privacy Policy', 'You must agree with the Privacy and Policy to continue.');
      return;
    }

    // Password Matching Validation
    if (password !== confirmPassword) {
      Alert.alert('Password Error', 'Passwords do not match.');
      return;
    }

    // Email Validation
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Sign up logic with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
        Alert.alert('Signup Successful', `Welcome, ${email}!`);
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Signup Error', errorMessage);
      });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="bg-violet-200 h-[520] mt-[250] ml-6 mr-6 rounded-3xl flex items-center">
            <Text className="text-3xl pt-8 font-bo">Welcome</Text>
            
            {/* Username Input with Icon */}
            <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="user" size={20} color="gray" />
              <TextInput
                placeholder="Username"
                className="flex-1 pl-2 h-11"
              />
            </View>
            
            {/* Email Input with Icon */}
            <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="envelope" size={20} color="gray" />
              <TextInput
                placeholder="Email ID"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                className="flex-1 pl-2 h-11"
              />
            </View>
            
            {/* Password Input with Icon */}
            <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="lock" size={20} color="gray" />
              <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                className="flex-1 pl-2 h-11"
              />
            </View>
            
            {/* Confirm Password Input with Icon */}
            <View className="w-[290] mt-6 flex-row items-center bg-gray-100 rounded-3xl pl-4">
              <FontAwesome name="lock" size={20} color="gray" />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                className="flex-1 pl-2 h-11"
              />
            </View>

            {/* Custom Checkbox */}
            <View className="flex-row items-center mt-4">
              <TouchableOpacity onPress={() => setSelection(!isSelected)} className="mr-2">
                <View className="w-6 h-6 border-2 flex items-center justify-center">
                  {isSelected && <FontAwesome name="check" size={15} color="purple" />}
                </View>
              </TouchableOpacity>
              <Text>I agree with Privacy and Policy</Text>
            </View>

            {/* Sign Up Button */}
            <View className="pt-5">
              <TouchableOpacity className="bg-green-300 rounded-3xl h-9 flex justify-center w-24 items-center" onPress={handleSignup}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Login Link */}
            <View className="mt-4">
              <Text>
                Already have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className="text-blue-500">Login</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


