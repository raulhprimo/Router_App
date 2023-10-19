// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0YiTXiCHD21AYP5C5Cxi4mRmVHJ4a7Fw",
  authDomain: "login-expo-b817c.firebaseapp.com",
  projectId: "login-expo-b817c",
  storageBucket: "login-expo-b817c.appspot.com",
  messagingSenderId: "1083148261599",
  appId: "1:1083148261599:web:5b41df27cbaecd0bc5b16a",
  measurementId: "G-2V4JSV4FZM"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase)