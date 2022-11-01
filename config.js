import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD0K7nVJjdey-BJh2m4IAwIi48qu5gEwWA",
  authDomain: "rn-crud-fb505.firebaseapp.com",
  projectId: "rn-crud-fb505",
  storageBucket: "rn-crud-fb505.appspot.com",
  messagingSenderId: "935805124555",
  appId: "1:935805124555:web:41ae513ecfd6561a6bc04e",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
