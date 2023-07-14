// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW2JbMBaMRiEuXh4kp6rnNZilOPcxUvyc",
  authDomain: "portfolio-9105a.firebaseapp.com",
  projectId: "portfolio-9105a",
  storageBucket: "portfolio-9105a.appspot.com",
  messagingSenderId: "1062149819966",
  appId: "1:1062149819966:web:84e2210600bf12e4e74b6f",
  measurementId: "G-07KFTK37GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);