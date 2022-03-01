import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyB2oK7XMSLbXqDn5aJNTeDl58asVvJT9zY",
    authDomain: "crwn-db-c5987.firebaseapp.com",
    projectId: "crwn-db-c5987",
    storageBucket: "crwn-db-c5987.appspot.com",
    messagingSenderId: "377601072108",
    appId: "1:377601072108:web:2ae3d1f08f74e4802a3ec9",
    measurementId: "G-2TFT9MCR39"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters=({prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

