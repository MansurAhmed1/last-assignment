// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB23htdg1vfq9HtUgi4X2vRwIgWjT8pXhw",
  authDomain: "assighment12-5a547.firebaseapp.com",
  projectId: "assighment12-5a547",
  storageBucket: "assighment12-5a547.appspot.com",
  messagingSenderId: "522433131638",
  appId: "1:522433131638:web:621b7c5400aef4856e1b57",
  measurementId: "G-9BRQ5MV0S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;