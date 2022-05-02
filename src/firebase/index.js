import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDdB6Sbl01oSeJFrq3HbY5hjWVLn89fAqE",
  authDomain: "spa-react-a1e96.firebaseapp.com",
  databaseURL: "https://spa-react-a1e96-default-rtdb.firebaseio.com",
  projectId: "spa-react-a1e96",
  storageBucket: "spa-react-a1e96.appspot.com",
  messagingSenderId: "505704591826",
  appId: "1:505704591826:web:47cebf7ca727f3025b180b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

