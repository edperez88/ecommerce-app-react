// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAIM2I1mHNwxfuFGBl5dJRV5ryEDOv8S4",
  authDomain: "island-spa-and-solarium.firebaseapp.com",
  projectId: "island-spa-and-solarium",
  storageBucket: "island-spa-and-solarium.appspot.com",
  messagingSenderId: "147617260279",
  appId: "1:147617260279:web:1108b69efbc9c6c16ba9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)