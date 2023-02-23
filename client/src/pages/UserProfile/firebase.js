// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDMyBqjTTfbTCG_lA5MKYhzZclx7YxxTfQ",
  authDomain: "stackoverflow-clone-9c64b.firebaseapp.com",
  projectId: "stackoverflow-clone-9c64b",
  storageBucket: "stackoverflow-clone-9c64b.appspot.com",
  messagingSenderId: "230082284474",
  appId: "1:230082284474:web:e162e51c90c8324ae5eb83",
  measurementId: "G-2RTQN1NCRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()