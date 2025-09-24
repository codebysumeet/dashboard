// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "./App.css";
// 🔥 Replace these with your Firebase project values
const firebaseConfig = {
  apiKey: "AIzaSyDU6qa_6nwfUk9FOvKr1OxPS09ilXWIRKQ",
  authDomain: "my-project-35f9b.firebaseapp.com",
  projectId: "my-project-35f9b",
  storageBucket: "my-project-35f9b.firebasestorage.app",
  messagingSenderId: "187559243112",
  appId: "1:187559243112:web:7868fbf26599ce1ebd3add",
  measurementId: "G-PDJCGCEWC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

// ✅ Correctly export auth
export const auth = getAuth(app);
