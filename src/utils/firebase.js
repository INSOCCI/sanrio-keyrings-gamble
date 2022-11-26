import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPamSWYG375R-j-MVJNEKHnuGjzE1LpYk",
  authDomain: "sanrio-keyrings-gamble.firebaseapp.com",
  projectId: "sanrio-keyrings-gamble",
  storageBucket: "sanrio-keyrings-gamble.appspot.com",
  messagingSenderId: "785325464528",
  appId: "1:785325464528:web:ac3a89438a273cb34177d5",
  measurementId: "G-97CQLKZVQM",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig)

export const db = getFirestore;
