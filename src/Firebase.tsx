import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKLe6Ba6PSHXNlGiWkDiXyYi87GiiW2HA",
  authDomain: "portfolio-73004.firebaseapp.com",
  projectId: "portfolio-73004",
  storageBucket: "portfolio-73004.appspot.com",
  messagingSenderId: "553379683171",
  appId: "1:553379683171:web:e10d8ec5495ab275d11156",
  measurementId: "G-SMQD7ZFNLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
