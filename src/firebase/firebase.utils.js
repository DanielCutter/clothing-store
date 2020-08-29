import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBRI7ciRmbNSpjgkbmOmVEowqlVONV1CFk",
    authDomain: "clothing-db-b3b94.firebaseapp.com",
    databaseURL: "https://clothing-db-b3b94.firebaseio.com",
    projectId: "clothing-db-b3b94",
    storageBucket: "clothing-db-b3b94.appspot.com",
    messagingSenderId: "568674330036",
    appId: "1:568674330036:web:4029288c0b5f37a8f83ee1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;