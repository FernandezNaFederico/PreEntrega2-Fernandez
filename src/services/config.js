
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "aullido-a2b18.firebaseapp.com",
    projectId: "aullido-a2b18",
    storageBucket: "aullido-a2b18.appspot.com",
    messagingSenderId: "202070679040",
    appId: "1:202070679040:web:e1a315ba29126dd2efc2e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);