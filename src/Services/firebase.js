// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCreauYPE0whxfz5gH5_WUd42ZJfFNGX0Q",
  authDomain: "quitzilla-clone.firebaseapp.com",
  projectId: "quitzilla-clone",
  storageBucket: "quitzilla-clone.appspot.com",
  messagingSenderId: "965422455723",
  appId: "1:965422455723:web:d681090dfbebb5430750ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const habits = [];

export async function fetchData() {
  const q = query(collection(db, "habits"), where());
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    habits.push(doc.data());
  });
}

export default habits;
