// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-5m4J6Pz6K9nyeywWoKZw_Pu-R8a7c5k",
  authDomain: "coder-app-696ea.firebaseapp.com",
  projectId: "coder-app-696ea",
  storageBucket: "coder-app-696ea.appspot.com",
  messagingSenderId: "227481117653",
  appId: "1:227481117653:web:3c2f16f840e0eabbf3d35c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)