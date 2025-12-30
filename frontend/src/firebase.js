// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDL1dRR2dQxcYUJ7nPjzn7CF3v8qlvdFw",
  authDomain: "cristopher-portfolio-react.firebaseapp.com",
  projectId: "cristopher-portfolio-react",
  storageBucket: "cristopher-portfolio-react.firebasestorage.app",
  messagingSenderId: "35447218388",
  appId: "1:35447218388:web:7314d6de7b8b7545599b41"
};

const test = console.log("Firebase apps:", getApps());

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 THIS LINE IS CRITICAL
export const db = getFirestore(app);