import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyByXVTJRhkJa85gxczvj0aQ6toGsmvaYbs",
    authDomain: "netflix-clone-b7a92.firebaseapp.com",
    projectId: "netflix-clone-b7a92",
    storageBucket: "netflix-clone-b7a92.appspot.com",
    messagingSenderId: "511671040633",
    appId: "1:511671040633:web:10793f27be8411efb932a8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };