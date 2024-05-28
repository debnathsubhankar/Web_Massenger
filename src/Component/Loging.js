import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../Store/Slices/authSlice";
import ChatMain from "./Chat/ChatMain";

const Loging = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const loginHandeler = () => {
    dispatch(loginAsync({ email, password }));
  };

  return (
    <div className="container mt-5">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {user ? (
        <div>{<ChatMain />}</div>
      ) : (
        <div className="card m-auto col-sm-6 p-3">
          <div className="m-auto">
            <span className="ManulaMar">
              <label htmlFor="email">Enter Email :</label>
              <input
                type="text"
                name="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <br />
            <span className="ManulaMar">
              <label htmlFor="password">Enter Password :</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            <br />
            <span className="mt-2">
              <button className="btn btn-primary" onClick={loginHandeler}>
                Login
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Loging;
