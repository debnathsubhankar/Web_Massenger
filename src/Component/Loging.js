import React, { useState } from "react";

const Loging = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  return (
    <div className="container mt-5">
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
            <button className="btn btn-primary">Login</button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Loging;
