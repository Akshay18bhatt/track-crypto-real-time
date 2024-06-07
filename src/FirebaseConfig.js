import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBNacMZx_D9LRHLSiY4ObDmsd361pWcda8",
    authDomain: "crypto-tracker-18cce.firebaseapp.com",
    projectId: "crypto-tracker-18cce",
    storageBucket: "crypto-tracker-18cce.appspot.com",
    messagingSenderId: "153004802330",
    appId: "1:153004802330:web:84bd15d8998f19f5b76ca3"
  };

export const firebaseApp= initializeApp(firebaseConfig);