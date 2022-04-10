// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC8-vPaWSduldMxyZ67H75JGamanoxaIs",
  authDomain: "ema-john-auth-c58b0.firebaseapp.com",
  projectId: "ema-john-auth-c58b0",
  storageBucket: "ema-john-auth-c58b0.appspot.com",
  messagingSenderId: "455978872525",
  appId: "1:455978872525:web:a542fc1301d18780f9c384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;