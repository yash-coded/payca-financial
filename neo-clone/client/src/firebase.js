import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBtVkQ5BIvV0sZG3gls_4tQn4-OS6FhqiA",
  authDomain: "neo-clone.firebaseapp.com",
  projectId: "neo-clone",
  storageBucket: "neo-clone.appspot.com",
  messagingSenderId: "720326326781",
  appId: "1:720326326781:web:cf69ea750ec4333c194194",
  measurementId: "G-N963TXVP0N",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

firebase.analytics();

export { db, auth, storage };
