// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuALkCPuDfgtG0hwRBmaCLB5Jd02ZK4B4",
  authDomain: "sanctuary-1c351.firebaseapp.com",
  projectId: "sanctuary-1c351",
  storageBucket: "sanctuary-1c351.appspot.com",
  messagingSenderId: "611126660704",
  appId: "1:611126660704:web:f0031b52da00e249edbd05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
