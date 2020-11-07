// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAhCwXnn2LqqKX7VEOuEQBfItcZz2_xn6A",
    authDomain: "clone-e5240.firebaseapp.com",
    databaseURL: "https://clone-e5240.firebaseio.com",
    projectId: "clone-e5240",
    storageBucket: "clone-e5240.appspot.com",
    messagingSenderId: "517236636456",
    appId: "1:517236636456:web:3a23aef3595ec9daaa2e1d",
    measurementId: "G-DP7Z0NPHYJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }