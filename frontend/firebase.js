// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPVbB3R7T37x5v5M6OBiqycW0pbvMHIQ8",
  authDomain: "gymapp-7ab7d.firebaseapp.com",
  projectId: "gymapp-7ab7d",
  storageBucket: "gymapp-7ab7d.firebasestorage.app",
  messagingSenderId: "1092010176664",
  appId: "1:1092010176664:web:b51cfb47d53977c86fe0ed",
  measurementId: "G-ZQECF4C0Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{app,auth}
