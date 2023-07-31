import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDhsYVQScZFq7pHIo3g5eYsDUh3YNmnnzE",
  authDomain: "miniproject-dbedc.firebaseapp.com",
  projectId: "miniproject-dbedc",
  storageBucket: "miniproject-dbedc.appspot.com",
  messagingSenderId: "516140803467",
  appId: "1:516140803467:web:01e09f705401cea8177b8e",
  measurementId: "G-YYT0HKWQWJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };