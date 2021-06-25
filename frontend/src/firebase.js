import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCRFX-9IJ74s0Y4uoO3tBPFMgFAfqPRw6A",
    authDomain: "freestand-development.firebaseapp.com",
    projectId: "freestand-development",
    storageBucket: "freestand-development.appspot.com",
    messagingSenderId: "519160619950",
    appId: "1:519160619950:web:9582841d5fd8a38f925e3f",
    measurementId: "G-ND9HM3FVJR"
});


export const auth = app.auth();
export default app;
