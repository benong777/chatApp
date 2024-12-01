// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6dlMM9YvcWmcIP5PmK2Y1crfJPCLytFw",
  authDomain: "chatapp-5eb1f.firebaseapp.com",
  projectId: "chatapp-5eb1f",
  storageBucket: "chatapp-5eb1f.firebasestorage.app",
  messagingSenderId: "719041520588",
  appId: "1:719041520588:web:ad3667434f6acbd5577369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  // Keep data even after refreshing app
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomsRef = collection(db, 'rooms');