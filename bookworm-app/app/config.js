import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFTO2VYrrpWIoVENBG2S8bLWEoHw_PoUE",
  authDomain: "bookworm-7aa32.firebaseapp.com",
  projectId: "bookworm-7aa32",
  storageBucket: "bookworm-7aa32.appspot.com",
  messagingSenderId: "195305593118",
  appId: "1:195305593118:web:f5ed33abe26ee14c4ed10f",
  measurementId: "G-9ZB9TVP4FD"
};

export const app = initializeApp(firebaseConfig);;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export const db = getFirestore(app);
