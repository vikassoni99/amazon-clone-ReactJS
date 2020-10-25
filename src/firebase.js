import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPHF9j2-GlpAIWwt_bnWyDRlOTHUYQuS4",
    authDomain: "clone-b4641.firebaseapp.com",
    databaseURL: "https://clone-b4641.firebaseio.com",
    projectId: "clone-b4641",
    storageBucket: "clone-b4641.appspot.com",
    messagingSenderId: "805829705326",
    appId: "1:805829705326:web:36787b38aa166d89dd707f",
    measurementId: "G-NX1V0EPDBR"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };