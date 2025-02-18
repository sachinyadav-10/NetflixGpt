// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPlfcBIR_BqafX0JL8mRyR1sM23VISVQU",
  authDomain: "sachinyadav0948.firebaseapp.com",
  projectId: "sachinyadav0948",
  storageBucket: "sachinyadav0948.firebasestorage.app",
  messagingSenderId: "462529888857",
  appId: "1:462529888857:web:7875e216ee5eea39c1a748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 