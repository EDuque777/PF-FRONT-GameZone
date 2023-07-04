// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9HpNHx06I-JPN-3GO8iCB5LpDXKLuxhY",
  authDomain: "gamezone-390702.firebaseapp.com",
  projectId: "gamezone-390702",
  storageBucket: "gamezone-390702.appspot.com",
  messagingSenderId: "1054056983919",
  appId: "1:1054056983919:web:db940a6c001f776f5a8c9a",
  measurementId: "G-Y4Y2HDDGDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)