// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX59ez7J9Iw35Pa-zqrCC6HITghJfKLAU",
  authDomain: "ml-stunting.firebaseapp.com",
  databaseURL: "https://ml-stunting-default-rtdb.firebaseio.com",
  projectId: "ml-stunting",
  storageBucket: "ml-stunting.firebasestorage.app",
  messagingSenderId: "811255852245",
  appId: "1:811255852245:web:9a10bbab8eb28c49d6465c",
  measurementId: "G-NXS475G5KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

