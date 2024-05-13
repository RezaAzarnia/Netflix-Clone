import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMLDhAk_nq2mWcvTW5tqvRzPX73uDxK7Q",
  authDomain: "movie-project-b0dd5.firebaseapp.com",
  projectId: "movie-project-b0dd5",
  storageBucket: "movie-project-b0dd5.appspot.com",
  messagingSenderId: "448831277105",
  appId: "1:448831277105:web:d91c05aee7910f106b6d10",
  measurementId: "G-GHZSWG8L7E",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
