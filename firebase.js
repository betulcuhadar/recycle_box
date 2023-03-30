// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyBnsREbWIEKyKkSQN-Y0ltMX1Gw0LPeKD0",
     authDomain: "recycle-50447.firebaseapp.com",
     projectId: "recycle-50447",
     storageBucket: "recycle-50447.appspot.com",
     messagingSenderId: "257979613463",
     appId: "1:257979613463:web:e9342585cf7d87e4c2f752",
     measurementId: "G-RYMEXH5TJB"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
     app = firebase.initializeApp(firebaseConfig)
} else {
     app = firebase.app();
}

const db = app.firestore();

export { db };
