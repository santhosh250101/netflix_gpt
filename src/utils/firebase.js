// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAz_kn-iCRD9Ij4yWN6ppWKm4bQu28J4I",
  authDomain: "netflixgpt-2e556.firebaseapp.com",
  projectId: "netflixgpt-2e556",
  storageBucket: "netflixgpt-2e556.appspot.com",
  messagingSenderId: "825478436902",
  appId: "1:825478436902:web:e0be23357548c0cc386ee7",
  measurementId: "G-C14M8LYJCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();