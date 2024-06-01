import React from "react";
import Detailes from "./Detailes";
import List from "./List";
import ChatBox from "./ChatBox";
const Mainchat = () => {
  return (
    <div className="container">
      <div className="col">
        <div className="col-sm-3">
          <List />
        </div>
        <div className="col-sm-5">
          <ChatBox />
        </div>
        <div className="col-sm-4">
          <Detailes />
        </div>
      </div>
    </div>
  );
};

export default Mainchat;
