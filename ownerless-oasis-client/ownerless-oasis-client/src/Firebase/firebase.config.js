// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlSOozPyf-tOpQmdvrM4FdJ9RQQy3E8UY",
  authDomain: "ownerless-oasis.firebaseapp.com",
  projectId: "ownerless-oasis",
  storageBucket: "ownerless-oasis.appspot.com",
  messagingSenderId: "214866840354",
  appId: "1:214866840354:web:9d56356c037d25dd08f37b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;