import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import Widgets from "./Widgets"
import firebase from "firebase/app"

function App() {
  return (
    
    //BEM
    <div className="app">
      

      {/* Left Sidebar */}
      <Sidebar />

      {/* Feed (Middle scrollable section) */}
      <Feed />

      {/* Right Widgets */}
      <Widgets />
    </div>
  );

  
}

firebase.initializeApp({
  apiKey: "AIzaSyC1r39KbjSOlL61sKgLnHqJXf8zTRwC5w0",
  authDomain: "twitter-clone-151ca.firebaseapp.com",
  projectId: "twitter-clone-151ca",
  storageBucket: "twitter-clone-151ca.appspot.com",
  messagingSenderId: "627665935727",
  appId: "1:627665935727:web:502acc7c009981e9f7dc9a"
});

export default App;
