import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBApgM3uaniVyVrdJPHXQTXPZsYzLzPGyY",
    authDomain: "notes-app-be9cb.firebaseapp.com",
    projectId: "notes-app-be9cb",
    storageBucket: "notes-app-be9cb.appspot.com",
    messagingSenderId: "563960023050",
    appId: "1:563960023050:web:9cecb06841ce960c2bb7f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")