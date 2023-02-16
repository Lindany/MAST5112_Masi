import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const db = getFirestore(app);

const ReadBooks = async (db) => {
  // MARK: Reading Doc
  // You can read what ever document by changing the collection and document path here
  const bookCol = collection(db, 'books');
  const bookSnapshot = await getDocs(bookCol);
  const bookList = bookSnapshot.docs.map(doc => doc.data());
  console.log("booklist: ", bookList)
  return bookList;
}

const lastHistory = async (db, noList) => {
  // MARK: Reading Doc
  // You can read what ever document by changing the collection and document path here
  const bookCol = collection(db, 'books');
  const bookSnapshot = await getDocs( query(bookCol, orderBy("id", "desc"), limit(noList)));
  const bookList = bookSnapshot.docs.map(doc => doc.data());
  console.log("booklist: ", bookList)
  return bookList;
}

const bookList = ReadBooks(db);
const lastHistoryList = lastHistory(db,1);
const threeHistoryList = lastHistory(db,3);

const UpdateBook = (value, merge) => {
  // MARK: Updating Doc
  const myDoc = doc(db, "books")

  // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
  setDoc(myDoc, value, { merge: merge })
    // Handling Promises
    .then(() => {
      // MARK: Success
      alert("Updated Successfully!")
      setText("")
    })
    .catch((error) => {
      // MARK: Failure
      alert(error.message)
    })
}

const DeleteBook = () => {
  // MARK: Deleting Doc
  const myDoc = doc(db, "books")

  deleteDoc(myDoc)
    // Handling Promises
    .then(() => {
      // MARK: Success
      alert("Deleted Successfully!")
    })
    .catch((error) => {
      // MARK: Failure
      alert(error.message)
    })
}


export { app, db, collection, addDoc, getFirestore, getDocs, bookList, ReadBooks, query, lastHistoryList, threeHistoryList };