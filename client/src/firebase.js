// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vacation-estate-dd65e.firebaseapp.com",
  projectId: "vacation-estate-dd65e",
  storageBucket: "vacation-estate-dd65e.appspot.com",
  messagingSenderId: "826626770844",
  appId: "1:826626770844:web:2f73e6ce2018153d216a59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);