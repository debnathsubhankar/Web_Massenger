import React, { useState } from "react";
import { signupAsync } from "../Store/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [fName, setFName] = useState();
  const [lName, SetLName] = useState();
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
          <p>Welcome, {user.email}!</p>
          <button>Logout</button>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="card col-sm-6 m-auto">
            <div className="m-auto">
              <span className="mt-2">
                <label htmlFor="firstName">First Name :</label>
                <input type="text" name="firstName" id="firstName" />
              </span>
              <br />
              <span className="mt-2">
                <label htmlFor="lastName">Last Name :</label>
                <input type="text" name="lastName" id="lastName" />
              </span>
              <br />
              <span className="mt-2">
                <label htmlFor="email">Email :</label>
                <input type="text" name="email" id="email" />
              </span>
              <br />
              <span className="mt-2">
                <label htmlFor="Password">Password :</label>
                <input type="text" name="Password" id="Password" />
              </span>
              <br />
              <span className="mt-2">
                <button className="btn btn-primary" onClick={signUpHandeler}>
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
