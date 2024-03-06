
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyDYo7HwccuBUshDN9Ee7JM8gwxvG3rgwOc",
  authDomain: "lapshop-ecommerc.firebaseapp.com",
  projectId: "lapshop-ecommerc",
  storageBucket: "lapshop-ecommerc.appspot.com",
  messagingSenderId: "481358306358",
  appId: "1:481358306358:web:fcf5b12c16709defd9cc97"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;