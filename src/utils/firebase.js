// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAVjEnITJjMyMKwrDaCD1jPuehDJuVgZM",
  authDomain: "netflixclone-6f2c1.firebaseapp.com",
  projectId: "netflixclone-6f2c1",
  storageBucket: "netflixclone-6f2c1.appspot.com",
  messagingSenderId: "960436974195",
  appId: "1:960436974195:web:8bd917d1f2133a7100b006",
  measurementId: "G-47B1XDZVYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()