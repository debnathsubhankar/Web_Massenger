import "./App.css";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.css";
import Loging from "./Component/Loging";
import Signup from "./Component/Signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={Signup} />
          <Route path="/loging" Component={Loging} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
