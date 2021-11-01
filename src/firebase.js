import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBbil0uLVfWCZDKxTxN1roHjqSzG_4299I",
  authDomain: "schema-f6c6c.firebaseapp.com",
  databaseURL: "https://schema-f6c6c-default-rtdb.firebaseio.com",
  projectId: "schema-f6c6c",
  storageBucket: "schema-f6c6c.appspot.com",
  messagingSenderId: "314473676657",
  appId: "1:314473676657:web:d34adb4781dcd3c4dc80d0"
});

export {firebaseConfig as firebase};