import React from "react";

const Header = () => {
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
          <a href="">Log Out</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
