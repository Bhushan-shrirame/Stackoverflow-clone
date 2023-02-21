// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD5VPb4slYUYvMuCLyWMfCRRgw6517NFNg",
  authDomain: "chatapplication-1cb2d.firebaseapp.com",
  databaseURL: "https://chatapplication-1cb2d-default-rtdb.firebaseio.com",
  projectId: "chatapplication-1cb2d",
  storageBucket: "chatapplication-1cb2d.appspot.com",
  messagingSenderId: "591747202118",
  appId: "1:591747202118:web:e5552fe398cebd6debde47",
  measurementId: "G-SV6JDNQZ56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase