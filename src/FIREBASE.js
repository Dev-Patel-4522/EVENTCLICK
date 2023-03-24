// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import firebase from "firebase";
// import { getFirebase } from "firebase/database";
// import { database } from "../firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmjiZrj_OCc49HGzTB1UUS80I7B4AeqlY",
  authDomain: "eventclick-expriment.firebaseapp.com",
  projectId: "eventclick-expriment",
  storageBucket: "eventclick-expriment.appspot.com",
  messagingSenderId: "508664132409",
  appId: "1:508664132409:web:4d61e594b7c1ae62a66ee8",

  passwordReset: (email) => {
    return firebaseConfig.auth().sendPasswordResetEmail(email);
  },
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
// export const db = firebase.firestore();
// export const db = getFirebase(app);

// export { storage, firebase }
