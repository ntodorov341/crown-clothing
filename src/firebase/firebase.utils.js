import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDi0UoBFaW7w4sdFj2pVykSi_eLUedNA6c",
    authDomain: "crown-db-cfda7.firebaseapp.com",
    projectId: "crown-db-cfda7",
    storageBucket: "crown-db-cfda7.appspot.com",
    messagingSenderId: "18130674015",
    appId: "1:18130674015:web:3dcb9f6bb772295a33d6ea",
    measurementId: ""
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;