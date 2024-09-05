import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ba2bb.firebaseapp.com",
  projectId: "reactchat-ba2bb",
  storageBucket: "reactchat-ba2bb.appspot.com",
  messagingSenderId: "856603483124",
  appId: "1:856603483124:web:977ec190bde68b2e0fb7a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
