import React, { useState } from "react";
import { signupAsync } from "../Store/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import SuccesSignUP from "./SuccesSignUP";

const Signup = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [regEmail, SetRegEmail] = useState();
  const [resPassword, setRegPassword] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const signUpHandeler = () => {
    dispatch(signupAsync({ fName, lName, regEmail, resPassword }));
  };

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {user ? (
        <div>
          {/* <p>Welcome, {user.email}!</p>
          <button>Logout</button> */}
          {<SuccesSignUP />}
        </div>
      ) : (
        <div className="container mt-5 h-100">
          <div className="card col-sm-6 m-auto">
            <div className="m-auto">
              <span>
                <label htmlFor="firstName">First Name :</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={(e) => setFName(e.target.value)}
                />
              </span>
              <br />
              <span>
                <label htmlFor="lastName">Last Name :</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={(e) => setLName(e.target.value)}
                />
              </span>
              <br />
              <span>
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => SetRegEmail(e.target.value)}
                />
              </span>
              <br />
              <span>
                <label htmlFor="Password">Password :</label>
                <input
                  type="text"
                  name="Password"
                  id="Password"
                  onChange={(e) => setRegPassword(e.target.value)}
                />
              </span>
              <br />
              <span className="">
                <button
                  className="btn btn-primary mt-4"
                  onClick={signUpHandeler}
                >
                  Submit
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
