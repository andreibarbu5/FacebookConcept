// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.X,
  authDomain: process.env.X,
  projectId: process.env.X,
  storageBucket: process.env.X,
  messagingSenderId: process.env.X,
  appId: process.env.X,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
