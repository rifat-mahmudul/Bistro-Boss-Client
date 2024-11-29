// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbj3IGttwyvOwUTVh-DUHOW1H1VnHevKk",
    authDomain: "bistro-boss-af3f0.firebaseapp.com",
    projectId: "bistro-boss-af3f0",
    storageBucket: "bistro-boss-af3f0.firebasestorage.app",
    messagingSenderId: "254922585758",
    appId: "1:254922585758:web:3d22ba0b68baf290316d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);