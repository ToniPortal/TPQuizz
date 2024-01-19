// Your React Native component file
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createUser, signInUser } from '../lib/FirebaseConfig'; // Update the path accordingly
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = async () => {
    try {
      const userId = await createUser(email, password);
      console.log('User created with ID:', userId);
      // Additional logic after user creation


    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  const handleSignInUser = async () => {
    try {
      const userId = await signInUser(email, password);
      console.log('User signed in with ID:', userId);
      // Additional logic after sign-in
      // await AsyncStorage.setItem('isLogged', 'true');

    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
      <Button title="Create User" onPress={handleCreateUser} />
      <Button title="Sign In" onPress={handleSignInUser} />
    </View>
  );


};

export default AuthScreen;
