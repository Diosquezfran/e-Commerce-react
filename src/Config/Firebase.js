import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC9mLEEPE_mstfGAfe2RyqtTDvuhjxh69s",
    authDomain: "francodiosquez-f4117.firebaseapp.com",
    projectId: "francodiosquez-f4117",
    storageBucket: "francodiosquez-f4117.appspot.com",
    messagingSenderId: "1022446678293",
    appId: "1:1022446678293:web:52b2e03e42b3cf771f391c"
});

export function getFirebase() {
    return app;
};

export function getFirestore() {
    return firebase.firestore(app);
};

