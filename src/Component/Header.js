import React from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../Store/Slices/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(loginAsync());
    window.localStorage.removeItem("userLog");
    navigate("/loging");
  };
  return (
    <div className="container row bg-light m-auto p-2">
      <div className="col-sm-3 title">
        <h4 className="bold">Web Massenger</h4>
      </div>
      <div className="col-sm-3 sig_title">
        <span>
          <a href="http://">Sign Up</a>
        </span>
        <span>
          <a href="http://">Log In</a>
        </span>
      </div>

      <div className="col-sm-3 consumer_name">
        <h4>Subhankar</h4>
      </div>
      <div className="col-sm-3 sig_title">
        <span>
          <a href="" onClick={userLogout}>
            Log Out
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
