
import { initializeApp } from "firebase/app";
// import dotenv from 'dotenv';

// dotenv.config();

const firebaseConfig = {
  apiKey: 'AIzaSyDvcQ-En1mFplLbhb0HQF4Ff80iS-sntn8',
  authDomain: "bloggingapp-74bf4.firebaseapp.com",
  projectId: "bloggingapp-74bf4",
  storageBucket: "bloggingapp-74bf4.appspot.com",
  messagingSenderId: "145406628546",
  appId: "1:145406628546:web:c8b6f5e881403ba9ace15b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);