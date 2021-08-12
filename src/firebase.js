import firebase from "firebase";

//portable database
const firebaseConfig = {
    apiKey: "AIzaSyC1r39KbjSOlL61sKgLnHqJXf8zTRwC5w0",
    authDomain: "twitter-clone-151ca.firebaseapp.com",
    projectId: "twitter-clone-151ca",
    storageBucket: "twitter-clone-151ca.appspot.com",
    messagingSenderId: "627665935727",
    appId: "1:627665935727:web:502acc7c009981e9f7dc9a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

  //Connected firebase to the backend
  //Export means we can go to any file and pull the database in