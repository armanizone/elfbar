// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Alor8Zdu1smGNRmUbEpWqQs1UmsX1nA",
  authDomain: "logistic-9b65e.firebaseapp.com",
  projectId: "logistic-9b65e",
  storageBucket: "logistic-9b65e.appspot.com",
  messagingSenderId: "444198525671",
  appId: "1:444198525671:web:23d1bf17b2472e3ead6042",
  measurementId: "G-YSLT913412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db
}