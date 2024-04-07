// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlxj9fyaWwy14dCLU-M_wOjoT40rNo9-s",
  authDomain: "estatehive-24831.firebaseapp.com",
  projectId: "estatehive-24831",
  storageBucket: "estatehive-24831.appspot.com",
  messagingSenderId: "533945431879",
  appId: "1:533945431879:web:aa7ff9ed1d74fa5c29fe62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;