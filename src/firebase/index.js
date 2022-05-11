import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp({
    apiKey: "AIzaSyA6lJqI8xUC1LpgtEfaNDZuuCHd-7-EUYw",
    authDomain: "linkedin-dd921.firebaseapp.com",
    projectId: "linkedin-dd921",
    storageBucket: "linkedin-dd921.appspot.com",
    messagingSenderId: "294384587610",
    appId: "1:294384587610:web:0e1ecc02a4dc0b7c73d963",
    measurementId: "G-95KX3L7J21"
  });
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
