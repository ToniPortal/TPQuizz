// firebaseAuth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6e5P0R-boHvwygHRy-aetdPjQHYF3zAw",
  authDomain: "tpquizz-f19b7.firebaseapp.com",
  projectId: "tpquizz-f19b7",
  storageBucket: "tpquizz-f19b7.appspot.com",
  messagingSenderId: "898698725504",
  appId: "1:898698725504:web:7c1153a742d9b179207e65",
  measurementId: "G-ECK28VWHXK"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user.uid;
  } catch (error) {
    throw error.message;
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user.uid;
  } catch (error) {
    throw error.message;
  }
};
