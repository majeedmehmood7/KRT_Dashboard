// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-7MurrM6KIB24NkaBc4vsJW2T5H4WF2A",
  authDomain: "dashboard-c5488.firebaseapp.com",
  projectId: "dashboard-c5488",
  storageBucket: "dashboard-c5488.appspot.com",
  messagingSenderId: "936559708223",
  appId: "1:936559708223:web:31fce44ab3d500d1fe508a",
  measurementId: "G-V445DZMH3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);