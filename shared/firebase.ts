import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC90RGZ5mJoxPZA82wV72caGWJhW53Jrj8",
    authDomain: "johnkuehcom.firebaseapp.com",
    projectId: "johnkuehcom",
    storageBucket: "johnkuehcom.appspot.com",
    messagingSenderId: "24484816307",
    appId: "1:24484816307:web:c6627c4b374a5b9b1897c6"
  })
}else {
  firebase.app(); // if already initialized, use that one
}

export const firestore = firebase.firestore();
export default firebase;
