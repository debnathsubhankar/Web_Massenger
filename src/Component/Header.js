import React from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../Store/Slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [logIn, setLogIn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogout = (e) => {
    e.preventDefault();
    dispatch(loginAsync());
    navigate("/loging");
  };

  const clickToLogIn = () => {
    setLogIn(false);
    console.log(logIn);
  };

  const clickToSignup = () => {
    setLogIn(true);
    console.log(logIn);
  };
  return (
    <div className="container row bg-light m-auto p-2">
      <div className="col-sm-3 title">
        <h4 className="bold">Web Massenger</h4>
      </div>
      <div className="col-sm-3 sig_title">
        {logIn ? (
          <span>
            <button className="btn btn-primery">
              <Link to="/loging" onClick={clickToLogIn}>
                Log In
              </Link>
            </button>
          </span>
        ) : (
          <span>
            <button className="btn btn-primery">
              <Link to="/" onClick={clickToSignup}>
                Sign Up
              </Link>
            </button>
          </span>
        )}
      </div>
      <div className="col-sm-3 sig_title">
        <span>
          <button className="btn btn-primary">
            <a href="" onClick={userLogout}>
              Log Out
            </a>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Header;
