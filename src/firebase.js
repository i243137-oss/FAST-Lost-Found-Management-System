// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfe_3nO4nMJDgHMTmzKW7cxs4vb-cT5ME",
    authDomain: "fast-lost-and-found.firebaseapp.com",
    projectId: "fast-lost-and-found",
    storageBucket: "fast-lost-and-found.firebasestorage.app",
    messagingSenderId: "631567091200",
    appId: "1:631567091200:web:f5b8453c055594c184fae5",
    measurementId: "G-3KCXTRCN85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
