
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDv5KVuSifo_JP1dJTNTUzRN4iKTV14ShY",

  authDomain: "anoroam-ct.firebaseapp.com",

  projectId: "anoroam-ct",

  storageBucket: "anoroam-ct.appspot.com",

  messagingSenderId: "1082532357133",

  appId: "1:1082532357133:web:f6ad541a9fefe89367e144",

  measurementId: "G-DQMV5BT6E2"

};
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  