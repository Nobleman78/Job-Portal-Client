// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4sqFZ2lJ9Uz97XYNf-TAzpAuQoEFKiS4",
  authDomain: "job-portal-aa443.firebaseapp.com",
  projectId: "job-portal-aa443",
  storageBucket: "job-portal-aa443.firebasestorage.app",
  messagingSenderId: "420094849978",
  appId: "1:420094849978:web:479b3869f2c64c5d8aa383"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);