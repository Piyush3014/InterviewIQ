
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-72a39.firebaseapp.com",
  projectId: "interviewiq-72a39",
  storageBucket: "interviewiq-72a39.firebasestorage.app",
  messagingSenderId: "1001673609502",
  appId: "1:1001673609502:web:4bb8d871f8a504fd20790f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}