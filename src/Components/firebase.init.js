// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3uyA0NTBH8M7uwS-9lXzsmKabI32y3m0",
  authDomain: "the-manufacturer-17ea3.firebaseapp.com",
  projectId: "the-manufacturer-17ea3",
  storageBucket: "the-manufacturer-17ea3.appspot.com",
  messagingSenderId: "49208700466",
  appId: "1:49208700466:web:c1a000090fb002978dd62b",
  measurementId: "G-GW0EMBXRX4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



