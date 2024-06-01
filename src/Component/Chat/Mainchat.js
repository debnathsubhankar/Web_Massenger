import React from "react";
import Detailes from "./Detailes";
import List from "./List";
import ChatBox from "./ChatBox";
const Mainchat = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4 border-top">
          <List />
        </div>
        <div className="col-sm-5">
          <ChatBox />
        </div>
        <div className="col-sm-3">
          <Detailes />
        </div>
      </div>
    </div>
  );
};

export default Mainchat;
