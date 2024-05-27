import React from "react";
import { useSelector } from "react-redux";

const SuccesSignUP = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user.email);
  return (
    <div className="container flex tick_box">
      <div className="card flex justify-content-center align-items-center tick_card ">
        <span className="m-auto">
          <img src="./tick.png" alt="tick" />
        </span>
        <h3 className="mb-2">{user.email} Successfuly Sign Up !</h3>
        <a href="/loging">
          <button type="button" className="btn btn-primary mb-3">
            Click to Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default SuccesSignUP;
