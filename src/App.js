import "./App.css";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.css";
import Loging from "./Component/Loging";
import Signup from "./Component/Signup";
import Mainchat from "./Component/Chat/Mainchat";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";

function App() {
  const userLog = window.localStorage.getItem("userLog");
  // const auth = getAuth();
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   auth.onAuthStateChanged(user);
  //   setUser(user);
  // });

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={userLog ? Mainchat : Signup} />
          <Route path="/loging" Component={Loging} />
          <Route path="/chat" Component={Mainchat} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
