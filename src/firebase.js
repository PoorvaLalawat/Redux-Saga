import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6ec4jz_6fuTwDy87ug37pww65X4IcvAQ",
  authDomain: "react-contact-1d9ed.firebaseapp.com",
  databaseURL: "https://react-contact-1d9ed-default-rtdb.firebaseio.com",
  projectId: "react-contact-1d9ed",
  storageBucket: "react-contact-1d9ed.appspot.com",
  messagingSenderId: "744609381582",
  appId: "1:744609381582:web:41e838ef1e8b79c6e1e49f"
};


// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
