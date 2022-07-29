// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCErxGjsfggj2L2WNYxJAYm0yhiLlAB9Yg",
//   authDomain: "i-want-please.firebaseapp.com",
//   projectId: "i-want-please",
//   storageBucket: "i-want-please.appspot.com",
//   messagingSenderId: "591074422912",
//   appId: "1:591074422912:web:396b1d711fe345c31d3665"
// };

//AD's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC4RIBtbZK9EeO__ZbvZimCLMgsFopdtbk",
  authDomain: "i-want-please-29916.firebaseapp.com",
  projectId: "i-want-please-29916",
  storageBucket: "i-want-please-29916.appspot.com",
  messagingSenderId: "72097342923",
  appId: "1:72097342923:web:1e493cb5fe5c0e9354c24e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider(app);

export { provider, auth, db };
