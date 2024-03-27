import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5Jw_swsHtt3URn9lttThkaupatQXg5dI",
  authDomain: "web-massenger-8fd63.firebaseapp.com",
  projectId: "web-massenger-8fd63",
  storageBucket: "web-massenger-8fd63.appspot.com",
  messagingSenderId: "472089314943",
  appId: "1:472089314943:web:51c6089cf8f2ae9118a14a",
  measurementId: "G-GP2R3WJHG9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
