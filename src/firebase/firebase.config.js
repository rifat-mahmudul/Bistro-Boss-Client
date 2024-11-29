// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.envvITE_apiKey,
    authDomain: import.meta.envvITE_authDomain,
    projectId: import.meta.envvITE_projectId,
    storageBucket: import.meta.envvITE_storageBucket,
    messagingSenderId: import.meta.envvITE_messagingSenderId,
    appId: import.meta.envvITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);