// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFlV6gCO8nGJV0RZDaj4JRKa-VQ85v7Fc",
  authDomain: "project-web-tinh.firebaseapp.com",
  projectId: "project-web-tinh",
  storageBucket: "project-web-tinh.appspot.com",
  messagingSenderId: "330131455870",
  appId: "1:330131455870:web:ec54198fb7c46108473d2f",
  measurementId: "G-HK7H20DE8S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);