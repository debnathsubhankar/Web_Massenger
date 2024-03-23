import React from "react";

const Loging = () => {
  return (
    <div className="container mt-5">
      <div className="card m-auto col-sm-6 p-3">
        <div className="m-auto">
          <span className="mt-2">
            <label htmlFor="email">Enter Email :</label>
            <input type="text" name="Email" id="email" />
          </span>
          <br />
          <span className="mt-2">
            <label htmlFor="password">Enter Password :</label>
            <input type="password" name="password" id="password" />
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
