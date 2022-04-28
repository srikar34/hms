import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC26YbFmv9l9bhraXy9UoyeZHdU3xQVO7o",
  authDomain: "hms-swe.firebaseapp.com",
  projectId: "hms-swe",
  storageBucket: "hms-swe.appspot.com",
  messagingSenderId: "891396886442",
  appId: "1:891396886442:web:5a1c9ed0936ba3d09be5d3",
  measurementId: "G-Z79BS5XYLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);