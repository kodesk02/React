// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNSDWwYAZ6oMLpMQ5FiJMPvFO-e2Z70RM",
  authDomain: "note-5d0e8.firebaseapp.com",
  projectId: "note-5d0e8",
  storageBucket: "note-5d0e8.appspot.com",
  messagingSenderId: "562225682829",
  appId: "1:562225682829:web:a53a621c7d3f9c6e0e05c4",
  measurementId: "G-BZ522CMH04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default firebase;