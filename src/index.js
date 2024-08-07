import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { Provider } from "react-redux";
import store from "./Store/Index";
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5Jw_swsHtt3URn9lttThkaupatQXg5dI",
  authDomain: "web-massenger-8fd63.firebaseapp.com",
  databaseURL: "https://web-massenger-8fd63-default-rtdb.firebaseio.com",
  projectId: "web-massenger-8fd63",
  storageBucket: "web-massenger-8fd63.appspot.com",
  messagingSenderId: "472089314943",
  appId: "1:472089314943:web:51c6089cf8f2ae9118a14a",
  measurementId: "G-GP2R3WJHG9",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
store.auth = auth;
store.db = db;
const database = getDatabase(app);
store.database = database;
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Persistence set to local."))
  .catch((error) => console.error("Error setting persistence: ", error));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
