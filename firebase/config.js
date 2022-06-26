// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCErxGjsfggj2L2WNYxJAYm0yhiLlAB9Yg",
  authDomain: "i-want-please.firebaseapp.com",
  projectId: "i-want-please",
  storageBucket: "i-want-please.appspot.com",
  messagingSenderId: "591074422912",
  appId: "1:591074422912:web:396b1d711fe345c31d3665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider(app);


export {provider, auth };

