
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9czyYgEJhUyS6eX0DA-sNN-ZGefY3OHA",
  authDomain: "backend-ecommerce-1231b.firebaseapp.com",
  projectId: "backend-ecommerce-1231b",
  storageBucket: "backend-ecommerce-1231b.appspot.com",
  messagingSenderId: "562522597150",
  appId: "1:562522597150:web:c1d1935b5edaea09d88b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

