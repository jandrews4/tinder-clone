import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFbwzBsAR5zfDNqKCMt4Cv16rVNV3Y6sM",
    authDomain: "tinder-clone-c804c.firebaseapp.com",
    projectId: "tinder-clone-c804c",
    storageBucket: "tinder-clone-c804c.appspot.com",
    messagingSenderId: "57746531624",
    appId: "1:57746531624:web:72ab7122c5e5cedbb65c1d",
    measurementId: "G-RHQ7S78D04"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
