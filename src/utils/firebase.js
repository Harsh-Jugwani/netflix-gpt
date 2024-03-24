import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAVjEnITJjMyMKwrDaCD1jPuehDJuVgZM",
  authDomain: "netflixclone-6f2c1.firebaseapp.com",
  projectId: "netflixclone-6f2c1",
  storageBucket: "netflixclone-6f2c1.appspot.com",
  messagingSenderId: "960436974195",
  appId: "1:960436974195:web:8bd917d1f2133a7100b006",
  measurementId: "G-47B1XDZVYM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
