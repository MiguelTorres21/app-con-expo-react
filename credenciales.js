// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCxf5W3k2owMLZy6h4Ar25z-idh1HgNPA",
  authDomain: "mi-blog-1.firebaseapp.com",
  projectId: "mi-blog-1",
  storageBucket: "mi-blog-1.appspot.com",
  messagingSenderId: "706174142078",
  appId: "1:706174142078:web:c1da949e26d5ddc7e4fa2f",
  measurementId: "G-P3SECMEXN3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;