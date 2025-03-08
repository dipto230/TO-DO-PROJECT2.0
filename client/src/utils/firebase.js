// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "to-do-project-ed713.firebaseapp.com",
  projectId: "to-do-project-ed713",
  storageBucket: "to-do-project-ed713.firebasestorage.app",
  messagingSenderId: "28438057589",
  appId: "1:28438057589:web:ad75d1b0b2501d12905e3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);