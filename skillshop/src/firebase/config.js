import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBOFaeQBfY2T24vXPyZd8uSD3Ja_4fNO-M",
  authDomain: "skillshop-cd94a.firebaseapp.com",
  projectId: "skillshop-cd94a",
  storageBucket: "skillshop-cd94a.appspot.com",
  messagingSenderId: "321565544929",
  appId: "1:321565544929:web:43f71f16373424848342a0"
};

export default firebase.initializeApp(firebaseConfig);