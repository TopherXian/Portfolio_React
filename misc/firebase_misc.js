// misc/firebase_misc.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDL1dRR2dQxcYUJ7nPjzn7CF3v8qlvdFw",
  authDomain: "cristopher-portfolio-react.firebaseapp.com",
  projectId: "cristopher-portfolio-react",
  storageBucket: "cristopher-portfolio-react.appspot.com",
  messagingSenderId: "35447218388",
  appId: "1:35447218388:web:7314d6de7b8b7545599b41"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);