import React from "react";

const Signup = () => {
  return (
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
            <button className="btn btn-primary">Submit</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
