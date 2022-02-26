import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCgxBDSmvGk1Nx6U0achoyqo_hj93tFhWE",

    authDomain: "mat-s-garage.firebaseapp.com",

    projectId: "mat-s-garage",

    storageBucket: "mat-s-garage.appspot.com",

    messagingSenderId: "438284889090",

    appId: "1:438284889090:web:74a2c52b2b17e4bb12cb1b",

    measurementId: "G-3Y0JQ8TZTE"

};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore();


